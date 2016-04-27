import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectSubreddit, invalidateSubreddit, fetchPostsIfNeeded } from '../actions/action'
import Picker from '../components/Picker'
import Posts from '../components/Posts'

class AsyncApp extends Component{
	constructor(props){
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.handleRefreshClick = this.handleRefreshClick.bind(this)
	}

	componentDidMount(){
		const { dispatch, selectedsubreddit } = this.props
		dispatch(fetchPostsIfNeeded(selectedsubreddit))
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.selectedsubreddit !== this.props.selectedsubreddit ){
			const { dispatch, selectedsubreddit } = nextProps
			dispatch(fetchPostsIfNeeded(selectedsubreddit))
		}
	}

	handleChange(nextSubreddit){
		this.props.dispatch(selectSubreddit(nextSubreddit))
	}

	handleRefreshClick(e){
		e.preventDefault()
		
		const { dispatch, selectedsubreddit } = this.props
		dispatch(invalidateSubreddit(selectedsubreddit))
		dispatch(fetchPostsIfNeeded(selectedsubreddit))
	}

	render(){
		const { selectedsubreddit, isFetching, lastUpdated,  posts} = this.props

		return (
			<div>
				<Picker value={ selectedsubreddit }
						onChange = { this.handleChange } 
						options = {[ 'reactjs', 'frontend' ]} />

				<p>
					{lastUpdated &&
						<span>
							Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
							{' '}
						</span>
					}
					{!isFetching &&
						<a href="#"
							onClick = { this.handleRefreshClick }>
							Refresh
						</a>
					}
				</p>
				{ isFetching && posts.length == 0 &&
					<h2> Loading... </h2>
				}
				{ !isFetching && posts.length ==0 &&
					<h2> Empty. </h2>
				}
				{ posts.length>0 && 
					<div style={{ opacity: isFetching? 0.5: 1}}>
						<Posts posts={ posts } />
					</div>
				}
			</div>
		)
	}
}

function mapStateToProps(state){
	const { selectedsubreddit, postsBySubreddit } = state
	const {
		isFetching,
		lastUpdated,
		items: posts
	} = postsBySubreddit[selectedsubreddit] || {
		isFetching : true,
		items: []
	}

	return {
		selectedsubreddit,
		isFetching,
		lastUpdated,
		posts
	}
}

export default connect(mapStateToProps)(AsyncApp)


