import { Segment, Icon, Divider } from 'semantic-ui-react'
function Footer() {
  return (
    <Segment  basic inverted padded vertical size="small" className='footer-ctn'>
        <div className='git-ic'>
            <a href="#top" id='topLink'>Back to Top</a>
         </div>
         <Divider inverted section />
            <p style={{fontSize: "15px", textAlign: "center"}}>©PaxTecum 2023. All Rights Reserved <Icon name='stethoscope' /></p>
    </Segment>
  )
}

export default Footer;