import React,{Component  } from "react";
import "../App.css";

class MobileMenu extends Component{
    async onMobileMenuClick(event){
        this.props.onMobileMenuItemClick({
            label:event.target.innerText,
            api:event.target.dataset.api
        });
    }

    render(){
        let menuDetails = [{
            label:"Popular Movies",
            api:"/discover/movie?sort_by=popularity.desc"
        },
        {
            label:"Highest Rated Movies",
            api:"/discover/movie?certification=R&sort_by=vote_average.desc"
        },
        {
            label:"Popular Kids Movies",
            api:"/discover/movie?certification.lte=G&sort_by=popularity.desc"
        },
        {
            label:"Best Movies of 2019",
            api:"/discover/movie?primary_release_year=2019&sort_by=vote_average.desc"
        },
        {
            label:"Highest Rated Sci-fi Movies",
            api:"/discover/movie?with_genres=878&sort_by=vote_average.desc"
        }];


        return (<div className="mobile-menu">
            <ul>
                {menuDetails.map(m=><li key={m.label} onClick={event=>this.onMobileMenuClick(event)} data-api={m.api}>{m.label}</li>)}
                </ul>
        </div>);
    };
}

export default MobileMenu;