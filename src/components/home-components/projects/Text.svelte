<script>
import TextAnimation from '../../common-components/TextAnimation.svelte';

export let projectName, url, projectText, projectYear;
</script>

<style lang="scss">
    @import '../../../styles/global.variables.scss';

    a{
        display: flex;
        align-items: center;
        font-weight: 300;
        text-transform: uppercase;
        font-size: 12rem;
        width: fit-content;
        margin-top: 10rem;
        color: #989898;
        font-weight: 300;
        font-style: italic;
    }
    h2 {
        position: relative;
        display: flex;
        align-items: center;
        margin: 15rem 0rem 5rem 0rem;
        font-size: 13rem;
        font-weight: 600;
        text-transform: capitalize;
        // transition: all .2s ease-in-out;
        // color: color(primary);
        z-index: 2;
    }

    p{
        position: relative;
        z-index: 1;
        text-indent: 10px;
    }

    .year{  
        // content: '2019';
        position: absolute;
        font-weight: 900;
        // opacity: .5;
        opacity: .3;
        z-index: -5;
        left: -60px;
        top: 30px;
        transform: rotate(-90deg);
        // color: #e6e7e8;
        color: color(accentLight);
        font-size: 45px;
    }

    @media screen and (min-width: breakpoint(sm)) {
        h2 {
            margin-top: 0rem;
        }
    }

@media screen and (min-width: breakpoint(md)){
    h2 {
        font-size: 23rem;
    }
    p{
        font-size: 18rem;
        line-height: 23px;
    }
    a{
        font-size: 14rem;
    }
}

</style>
<div>
    <h2>{projectName}</h2>
    <p>
        <span class='year'>{projectYear}</span>
        {@html projectText}
    </p>
    <a rel=prefetch href="{url}">
        <TextAnimation text={`Project Details`} />
    </a>
</div>