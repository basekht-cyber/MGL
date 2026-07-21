# Packages ./out into a Hostinger-ready zip.
#
# Why not Compress-Archive / "Send to > Compressed folder"? On Windows
# PowerShell those write ZIP entries with backslash separators. Linux unzip
# (what Hostinger runs) then creates files literally named "_next\static\..."
# instead of nested folders, and every asset 404s. This writes POSIX paths.

$ErrorActionPreference = 'Stop'

$root = $PSScriptRoot
$src = Join-Path $root 'out'
$zipPath = Join-Path $root 'metagrowthlabs-hostinger.zip'

if (-not (Test-Path $src)) {
    throw "No ./out directory - run 'npm run build' first."
}

if (Test-Path $zipPath) {
    Remove-Item -LiteralPath $zipPath -Force
}

Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

$zip = [System.IO.Compression.ZipFile]::Open($zipPath, 'Create')
try {
    # -Force so dotfiles (.htaccess) are included
    $files = Get-ChildItem -LiteralPath $src -Recurse -File -Force
    foreach ($f in $files) {
        $rel = $f.FullName.Substring($src.Length + 1) -replace '\\', '/'
        $entry = $zip.CreateEntry($rel, 'Optimal')
        $out = $entry.Open()
        $in = [System.IO.File]::OpenRead($f.FullName)
        $in.CopyTo($out)
        $in.Close()
        $out.Close()
    }
}
finally {
    $zip.Dispose()
}

# Verify what we just produced rather than trusting it
$check = [System.IO.Compression.ZipFile]::OpenRead($zipPath)
try {
    $backslashes = @($check.Entries | Where-Object { $_.FullName.Contains([char]92) }).Count
    $htaccess = @($check.Entries | Where-Object { $_.FullName -eq '.htaccess' }).Count
    $total = $check.Entries.Count
}
finally {
    $check.Dispose()
}

$sizeMb = '{0:N2}' -f ((Get-Item $zipPath).Length / 1MB)

Write-Output "Created: $zipPath"
Write-Output "  entries      : $total"
Write-Output "  size         : $sizeMb MB"
Write-Output "  .htaccess    : $(if ($htaccess -eq 1) { 'present' } else { 'MISSING' })"
Write-Output "  path format  : $(if ($backslashes -eq 0) { 'POSIX (ok)' } else { "BROKEN - $backslashes backslash entries" })"

if ($htaccess -ne 1 -or $backslashes -ne 0) {
    throw 'Zip failed verification.'
}
