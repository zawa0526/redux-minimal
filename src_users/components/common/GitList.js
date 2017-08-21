import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Table, Pagination } from "react-bootstrap";

export class GitList extends React.Component {

  // pre-render logic
  componentWillMount() {
    // the first time we load the app, we need that users list
  }

  // constructor
  constructor(props) {
    super(props);

    // default ui local state
    this.state = {
      delete_show: false,
      delete_user: {},
    };

    // bind <this> to the event method
    // this.changePage = this.changePage.bind(this);
  }

  // render
  render() {
    // pagination
    console.log(this.props)
    const {users, page, gitRepos} = this.props;
    const per_page = 10;
    const pages = Math.ceil(users.length / per_page);
    const start_offset = (page - 1) * per_page;
    let start_count = 0;

    console.log("============GitList.render()==================")
    console.log(gitRepos)
    // console.log(users)

    // show the list of users
    return (
      <div>
        <Table bordered hover responsive striped>
          <thead>
          <tr>
            <th>NAME</th>
            <th>AUTHOR</th>
          </tr>
          </thead>
          <tbody>
          {gitRepos.map((gitRepos, index) => {
            if (index >= start_offset && start_count < per_page) {
              start_count++;
              return (
                <tr>
                  <td>#{gitRepos.name}</td>
                  <td>{gitRepos.author}</td>
                </tr>
              );
            }
          })}
          </tbody>
        </Table>

        {/*<Pagination className="users-pagination pull-right" bsSize="medium" maxButtons={10} first last next*/}
                    {/*prev boundaryLinks items={pages} activePage={page} onSelect={this.changePage}/>*/}

      </div>
    );
  }

  // change the user lists' current page
  // changePage(page) {
  //   this.props.dispatch(push('/?page=' + page));
  // }
}

// export the connected class
function mapStateToProps(state) {
  return {
    users: state.users,
    gitRepos: state.gitRepos,

    // https://github.com/reactjs/react-router-redux#how-do-i-access-router-state-in-a-container-component
    // react-router-redux wants you to get the url data by passing the props through a million components instead of
    // reading it directly from the state, which is basically why you store the url data in the state (to have access to it)
    page: Number(state.routing.locationBeforeTransitions.query.page) || 1,
  };
}
export default connect(mapStateToProps)(GitList);
