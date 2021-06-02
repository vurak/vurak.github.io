import React from 'react';
import text from './text.js'


import SocialBar from './SocialBar.js'
import Landing from './LandingComponent.js'
import Collage from './CollageComponent.js'


function Title({children}) {
    return (
        <div className="relative flow flex-wrap h-auto w-full content-center items-center text-center font-bold">
            <div className="w-full px-6 py-2">
                <div className=" font-bold text-3xl text-indigo-400 ">{children}</div>
                <hr className="m-auto self-center w-1/2 border-2 rounded-full mt-1" />
            </div>
        </div>
    )
}

function TextElement(props) {

    

    return (
        <div className={`relative px-3 lg:px-6 py-3 ${props.c ? 'text-center' : 'text-left'}`}>
            {props.title ? <div className="font-bold text-2xl text-indigo-400 mb-2 z-20">{props.title}</div> : null}
            <p className="text-gray-200 font-normal text-lg md:text-xl z-20 overflow-hidden">
                {props.children}
            </p>
        </div>
    )
}

function GridElement(props) {
    let image = null
    if (props.image != null) {
        image = <div className="flex items-center relative px-0 lg:px-0  w-full max-h-96 overflow-hidden">
                    <img src={props.image} alt="" className="block w-full h-auto"/>
                </div>
    } else image = null

    return (

        <div
            className={`flex items-center col-span-1 md:col-span-${props.span} xl:col-span-${props.span}  relative my-2 h-300 w-full font-bold z-10`}
            data-rellax-speed="2">
            <div
                className="flex flex-col cursor-pointer items-start rounded w-full h-auto overflow-hidden bg-indigo-even-darker2 shadow-xl border-6 border-indigo-400 border-t-6 hover:border-t-20 hover:bg-indigo-even-darker duration-200"
                onClick={props.onClick}>
                <TextElement title={props.title}>{props.children}</TextElement>
                {image}
                
            </div>
        </div>

    )
}


const ProgressBar = props => {
    return(
        <>
            <div className="w-4/5 md:w-2/3 m-auto">
                <p className="font-mono text-lg text-indigo-200">{props.title}</p>
            </div>
            <div className=" h-4 w-4/5 md:w-2/3 m-auto items-center" >
                <div className="flex align-middle w-full m-auto items-center">
                    <div className={`bg-indigo-300 h-4 z-30`} style={{width:props.p*10+"%"}} >
                    
                    </div>
                    <div className={`h-4 border-dashed border-2 border-l-0`} style={{width:100-props.p*10+"%"}} >
                        
                    </div>
                </div>
            </div>
        </>
    )
}


function Contents(props) {


    function handleClick(object) {
        props.setInfoPanel(!props.infoPanel)
        props.setExtendedInfoObject(object)
    }

    const arrayOfObjects = Object.values(text.projects)
    
    const arrayOfComponents = arrayOfObjects.map(object => (
            <GridElement key={object.title} title={object.title} 
            image={object.images ? object.images.cover : null} span={object.span ? object.span : 1} 
            onClick={() => { handleClick(object) }} >
                {object.short}
            </GridElement>
    ))

    return (
        <section className="h-screen bg-purple-even-darker">
            <div className="h-full2 relative items-end justify-items-end">

                <div className="relative flow flex-row items-end top-0 h-full w-full flex-wrap z-0"></div>

                <div className="relative flow flex-row items-end bg-purple-even-darker bottom-0 w-full">

                    <Title>About me</Title>
                    <div className="relative w-full m-auto lg:w-2/3">
                        <TextElement c="true">
                            {text.about.short}
                        </TextElement>
                    </div>

                    <Title>Projects</Title>
                    <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 relative px-2 md:px-20 w-full overflow-auto md:gap-4 ">
                        {arrayOfComponents}
                    </div>

                    <Title>Skills</Title>
                    <div className="relative w-full m-auto lg:w-2/3">
                        
                            <ProgressBar p={6} title="JavaScript"/><br/>
                            <ProgressBar p={9} title="Unity (C#)"/><br/>
                            <ProgressBar p={8} title="HTML/CSS"/><br/>
                            <ProgressBar p={7} title="React"/><br/>
                            <ProgressBar p={6} title="Git"/><br/>
                            <ProgressBar p={7} title="Blender"/><br/>
                            <ProgressBar p={8} title="Python"/><br/>
                            
                        
                    </div>

                    <Title>Contact</Title>
                    <div className="relative w-full m-auto lg:w-2/3">
                        {/* <TextElement c="true">
                            You can reach me at any of the following places:
                        </TextElement> */}
                        <SocialBar/>
                    </div>

                    <hr className="mx-auto self-center w-full border-2 mt-7"/>
                    <Footer/>
                
                </div>
            </div>
        </section>
    )
}

const Footer = props => {
    return (
        
        <footer className="absolute w-full m-auto z-10 bg-purple-even-darker">
            <div className="relative text-center object-center content-center items-center m-auto my-10">
                <span className="text-sm font-normal text-indigo-200">Made with ❤️ by Fred Old – Code available on <a className="underline" target="_blank" rel="noreferrer" href="https://github.com/Vurak/vurak.github.io/tree/react-dev-branch">GitHub</a></span>
            </div>
        </footer>
    )
}

const MoreInfo = props => {



    return (
        <div className="flex absolute w-full justify-center items-center no-scrollbar">
            
            <div className="flex fixed justify-center items-center mt-auto top-0 h-full w-full bg-purple-even-darker z-0">
                <div className="absolute top-5 h-14 w-14 cursor-pointer z-30 rounded-full bg-purple-even-darker invisible md:visible" onClick={props.handleClick}>
                    <svg className="animate-pulse w-full h-full fill-current text-indigo-200" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"></path>
                    </svg>
                </div>
                <div className="absolute bottom-5 h-14 w-14 cursor-pointer z-30 rounded-full bg-purple-even-darker visible md:invisible" onClick={props.handleClick}>
                    <svg className="animate-pulse w-full h-full fill-current text-indigo-200" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.739,13.962c-0.087,0.086-0.199,0.131-0.312,0.131c-0.112,0-0.226-0.045-0.312-0.131l-3.738-3.736c-0.173-0.173-0.173-0.454,0-0.626l3.559-3.562c0.173-0.175,0.454-0.173,0.626,0c0.173,0.172,0.173,0.451,0,0.624l-3.248,3.25l3.425,3.426C11.911,13.511,11.911,13.789,11.739,13.962 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.148,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.148,17.521,10"></path>
                    </svg>
                </div>
                <div
                className={`flex items-center relative h-full w-full font-bold z-10 `}
                data-rellax-speed="2">
                    <div
                        className="flex relative flex-col items-start w-full h-full md:w-2/3 md:h-4/5 overflow-scroll no-scrollbar my-5 mx-auto bg-indigo-even-darker shadow-xl  border-indigo-400 md:rounded border-l-6 border-r-6 duration-200">
                        <TextElement>{props.extendedInfoObject.long}</TextElement>
                        <Collage object={props.extendedInfoObject}/>
                    </div>
                </div>
            </div>
        </div>
    )

}

//========
// TODO:  Use React context to store what text element we are currently on y setting it on click on one of the Grid elements or whatever
// TODO:  That way you can keep track without large strign everywhere. Hiopefully this is the solution you are looking for. Learn Vim.
//========


const TestHide = props => {
    const handleClick = () => {
        props.setInfoPanel(!props.infoPanel)
    }
    


    return (
        props.infoPanel ?
            <>
                <div className="absolute transform transition -translate-x-full ease-in-out duration-700 z-50 bg-purple-even-darker">
                    {props.children}
                </div>
                <MoreInfo extendedInfoObject={props.extendedInfoObject} handleClick={handleClick}>
                    
                </MoreInfo>
            </>
            :
            <>
                <div className="absolute transform transition translate-x ease-in-out duration-700 z-50 bg-purple-even-darker">
                    {props.children}
                </div>
                <MoreInfo extendedInfoObject={props.extendedInfoObject} handleClick={handleClick}>
                    
                </MoreInfo>
            </>
    )
}


function App() {
    const [infoPanel, setInfoPanel] = React.useState(false)
    const [currentExtendedInfoObject, setCurrentExtendedInfoObject] = React.useState("")

    React.useEffect(() => {
        if(infoPanel) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
    }, [infoPanel])

    return (
        <React.Fragment>
            <TestHide infoPanel={infoPanel} setInfoPanel={setInfoPanel} extendedInfoObject={currentExtendedInfoObject}>
                <Landing />
                <Contents infoPanel={infoPanel} setInfoPanel={setInfoPanel} setExtendedInfoObject={setCurrentExtendedInfoObject}/>
            </TestHide>
        </React.Fragment>
    )
}

export default App;
