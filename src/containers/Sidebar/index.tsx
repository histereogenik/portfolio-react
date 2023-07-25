import Titulo from '../../components/Titulo'
import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Humberto Nacif</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        histereogenik
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro de Software Full Stack
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
