<script>

</script>

<style lang="scss">
    @import '../../styles/global.variables.scss';

    div {
        display: flex;
        flex-direction: column;
    }
    
    @media screen and (min-width: 40em){
        div{
            flex-direction: row;
        }
    }

    h3 {
        width: fit-content;
        margin-bottom: 15rem;
        width: 100%;
        text-transform: uppercase;
        
        @media (min-width: breakpoint(sm)) {
            width: 18%;
        }

        @media (min-width: breakpoint(md)) {
            width: 20%;            
        }
    }

    ul.skills{
        position: relative;
        top: 10rem;
        width: 100%;
        display: flex;
        flex-wrap: wrap;

        @media (min-width: breakpoint(sm)) {
            width: 60%;    
        }
    }

    ul.skills::before {
        content: '';
        height: 100%;
        position: absolute;
        // border-left: 3px solid #e6e7e8;
        border-left: 3px solid lighten(color(bodyText), 80%);
        opacity: .4;
    }

    li {
        width: 100%;
        margin: 0rem 0rem 25rem 0rem;
        padding: 0;
        display: flex;
        align-items: center;
        margin-left: -2px;
        height: 0;
        z-index: 2;

        @media (min-width: breakpoint(md)) {
            margin: 0rem 0rem 35rem 0rem;
        }
    }

    ul li:last-child {
        margin-bottom: 0rem;
    }

    li::before {
        content: '';
        width: 7px;
        height: 7px;
        background: color(bodyText);
        margin-right: 10rem;
        border-radius: 100%
    }

</style>

<div>
    <h3>
        Skills
    </h3>
        <ul class="skills">
            <li>React | Redux</li>
            <li>Gatsby Js | React Static</li>
            <li>Svelte 3 | Sapper</li>
            <li>Node Js | Express</li>
            <li>JavaScript (ES8+)</li>
            <li>jQuery</li> 
            <li>Asynchronous JavaScript</li> 
            <li>WebPack</li>
            <li>Git (Version Control)</li>
            <li>Command Line</li>
            <li>SASS | SCSS</li>
            <li>CSS</li>
            <li>Foundation | Bootstrap</li>
            <li>HTML (WCAG compliant)</li>
            <li>HTML Emails</li>
            <li>GitHub | BitBucket</li>
            <li>WordPress | Kentico</li>
            <li>Adobe Suite</li>
            <li>Figma</li>
            <li>SEO</li>
            <li>Usability Testing</li> 
            <li>Agile | Waterfall</li> 
        </ul>
</div>