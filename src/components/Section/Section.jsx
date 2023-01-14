import { SectionContainer,Title } from "./Section.styled";
import PropTypes from 'prop-types'; 
const Section =({title,children}) => (
    <SectionContainer>
    <Title>{title}</Title>
    {children}
    </SectionContainer>
)
Section.propTypes = {
title:PropTypes.string.isRequired,
children:PropTypes.node,
}
export default Section;