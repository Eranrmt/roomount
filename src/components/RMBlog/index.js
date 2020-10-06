import React, {useState} from 'react';
import { Container, ContinueLink, RMBlogStaticPage, RMArticleTitle,RMBlogPage  } from './styles'
import Parser from 'html-react-parser';
import { getContent as getA1Conent } from './RMArticle1'
import { getContent as getA2Conent } from './RMArticle2'
import { getContent as getA3Conent } from './RMArticle3'
import { getContent as getA4Conent } from './RMArticle4'

import { getTitle as getA1Title } from './RMArticle1'
import { getTitle as getA2Title } from './RMArticle2'
import { getTitle as getA3Title } from './RMArticle3'
import { getTitle as getA4Title } from './RMArticle4'

export const RMBlog = () => {
    return <RMBlogPage><RMBlogSections></RMBlogSections></RMBlogPage>
}

export const RMBlogSections = () => {
    let cont1 = getA1Conent();
    let cont2 = getA2Conent();
    let cont3 = getA3Conent();
    let cont4 = getA4Conent();

    let title1 = getA1Title();
    let title2 = getA2Title();
    let title3 = getA3Title();
    let title4 = getA4Title();

    let articles = [cont1, cont2, cont3, cont4];
    let articlesTitles = [title1, title2, title3, title4];

    let map = [];
    let i = 0;
    articles.forEach((cnt) => {
        let title = articlesTitles[i];
        map.push(<RMBlogSection title={title} cont={cnt}></RMBlogSection>)
        i++;
    });
    return map;
}

export const RMBlogSection = (cont) => {
    let content = cont.cont;
    let title = cont.title;
    const [mode, setMode] = useState('colapsed');

    const toggle = React.useCallback((e) => {
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
    debugger;
    return <Container>
        <RMBlogStaticPage>
            <RMArticleTitle>{title}</RMArticleTitle>
            <div id="art1" className="RMStaticBlogTextArea" mode={mode}>{Parser(content)}</div>
            <ContinueLink mode={mode} onClick={(e) => toggle(e)}>{linkText}</ContinueLink>
        </RMBlogStaticPage>
    </Container>
}