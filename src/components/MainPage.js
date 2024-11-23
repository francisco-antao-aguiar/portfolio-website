import './MainPage.css'
import Header from './Header/Header'
import Introduction from './Introduction/Introduction'
import Projects from './Projects/Projects'
import AboutMe from './AboutMe/AboutMe'

function MainPage() {
    return ( 
        <div>
            <Header/>
            <Introduction/>
            <Projects/>
            <AboutMe/>
        </div>
);
}

export default MainPage;