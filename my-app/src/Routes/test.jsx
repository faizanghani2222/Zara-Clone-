import React from 'react';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';

export const Test=()=>{
    let options = {
        sectionClassName:     'section',
        anchors:              ['sectionOne', 'sectionTwo', 'sectionThree'],
        scrollBar:            false,
        navigation:           true,
        verticalAlign:        false,
        sectionPaddingTop:    '50px',
        sectionPaddingBottom: '50px',
        arrowNavigation:      true
      };
    return   <div>
    <SectionsContainer className="container" {...options}>
      <Section className="section" verticalAlign="true" color="#69D2E7">Page 1</Section>
      <Section className="section" color="#A7DBD8">Page 2</Section>
      <Section className="section" color="#E0E4CC">Page 3</Section>
    </SectionsContainer>
  </div>
}