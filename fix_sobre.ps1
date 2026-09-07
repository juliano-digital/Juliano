$content = Get-Content -Path "c:\Users\julia\Desktop\Projetos\meusite\src\App.tsx" -Raw
$content = $content -replace 'const heroRef = useScrollReveal<HTMLElement>\(\)', 'const heroRef = useScrollReveal<HTMLElement>()
  const sobreRef = useScrollReveal<HTMLElement>()'
$content = $content -replace '<section className="about-compact reveal" id="sobre">', '<section className="about-compact reveal" id="sobre" ref={sobreRef}>'
Set-Content -Path "c:\Users\julia\Desktop\Projetos\meusite\src\App.tsx" -Value $content
Write-Host "Arquivo atualizado com sucesso!"