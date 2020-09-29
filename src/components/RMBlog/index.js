import React, {useState} from 'react';
import { Container, ContinueLink, RMBlogStaticPage, RMArticleTitle,RMBlogPage  } from './styles'
import Parser from 'html-react-parser';
import { getContent as getA1Conent } from './RMArticle1'
import { getContent as getA2Conent } from './RMArticle2'

export const RMBlog = () => {
    return <RMBlogPage><RMBlogSections></RMBlogSections></RMBlogPage>
}

export const RMBlogSections = () => {
    let cont1 = getA1Conent();
    let cont2 = getA2Conent();
    let articles = [cont1, cont2];
    let map = [];
    articles.forEach((cnt) => {
        map.push(<RMBlogSection cont={cnt}></RMBlogSection>)
    });
    return map;
}

export const RMBlogSection = (cont) => {
    let content = cont.cont;
    const [mode, setMode] = useState('colapsed');

    const toggle = React.useCallback((e) => {
        debugger;
        let mode = e.target.getAttribute("mode");
        if (mode === "colapsed") {
            setMode("expand");
            return;
        }
        setMode("colapsed");
    }, []);

    let linkText = "Continue Reading";
    if (mode === "expand") {
        linkText = "Show Less";
    }
    return <Container>
        <RMBlogStaticPage>
            <RMArticleTitle>Article 1</RMArticleTitle>
            <div id="art1" className="RMStaticBlogTextArea" mode={mode}>{Parser(content)}</div>
            <ContinueLink mode={mode} onClick={(e) => toggle(e)}>{linkText}</ContinueLink>
        </RMBlogStaticPage>
    </Container>
}