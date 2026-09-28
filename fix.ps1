$path = \"src\componentes\Imobiliarias\mobiliaria.tsx\"  
$content = @()  
$content += \"import { CategoryProjectsPage } from '../CategoryProjectsPage/CategoryProjectsPage'\"  
$content += \"import { mobiliariasProjects } from './mobiliariasProjects'\"  
$content += \"\"  
$content += \"export function Mobiliarias() {\"  
$content += \"  return (\"  
$content += \"    <CategoryProjectsPage\"  
$content += \"      title=`\"Projetos de Gestao`\"\"  
$content += \"      description=`\"Pain‚is, sistemas e experiˆncias digitais para organizar opera‡äes e resultados.`\"\"  
$content += \"      projects={mobiliariasProjects}\"  
$content += \"    />\"  
$content += \"  )\"  
$content += \"}\"  
[System.IO.File]::WriteAllLines($path, $content, [System.Text.Encoding]::UTF8)  
Get-Content $path  
