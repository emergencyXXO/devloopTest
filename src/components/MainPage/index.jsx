import React, { useEffect} from 'react';
import cls from './style.module.scss';
import { withAuthRedirect } from '../../hoc/withAuth';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getPhotoThunkCreator } from '../../reducer/AppReducer';
import Preloader from '../Preloader';


let MainPage =(props)=>{
	// componentDidMount(){
	// 	this.props.getPhotoThunkCreator(this.props._meta.CurrentPage);
	// }
	useEffect(
		() => {
			props.getPhotoThunkCreator(props._meta.currentPage);
		},[]

	);




		return (

			<div className={`${cls.main__page}`}>
				{props.isFetching ? <Preloader /> : null}
				{props.PhotoData.map(e =>(
					<div key={e.id}>
						<img  src={e.url} alt=""/>
						<p>{e.title}</p>
					</div>))}


					<button onClick={()=>{

						props.getPhotoThunkCreator(props._meta.currentPage + 1);
					}} className={cls.show_more}>
						Show more
					</button>

			</div>
		)


}


let mapStateToProps = (state) => {
	return{
		_meta: state.MainPage._meta,
		PhotoData:state.MainPage.PhotoData,
		isFetching:state.MainPage.isFetching,

	}

};




export default compose(connect(mapStateToProps,{getPhotoThunkCreator}),withAuthRedirect)(MainPage);