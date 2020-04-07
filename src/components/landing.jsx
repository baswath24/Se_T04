import React, { Component } from "react";


class FilteredList extends Component {
    constructor(props) {
        super(props);


        this.state = {


            initialItems: [
                "Apples",
                "Broccoli",
                "Chicken",
                "Duck",
                "Eggs",
                "Fish",
                "Granola",
                "Hash Browns"
            ],
            uitems: ["Apples",
                "Broccoli",
                "Chicken",
                "Duck",
                "Eggs",
                "Fish",
                "Granola",
                "Hash Browns"],
        };
    }

    filterList(input) {

        var updatedList = this.state.initialItems;
        updatedList = updatedList.filter(function (item) {
            return item.toLowerCase().search(input.target.value) !== -1;
        });
        this.setState({ uitems: updatedList });;

    }
    //<a class="nav-link active" href="#" >profile</a>

    render() {


        return (<div>
            <p></p>
            <div class="pos-f-t m-2">
                <div class="collapse" id="navbarToggleExternalContent">
                    <div class="bg-dark p-4">
                        <h4 class="text-white">
                            <ul class="nav flex-column">
                                <li class="m-3 nav-item">
                                    {this.props.n.name}
                                </li>
                                <li class="m-3 nav-item">
                                    {this.props.n.email}
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">donation history</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">volunteer</a>
                                </li>

                            </ul>
                        </h4>

                    </div>
                </div>
                <nav class="navbar navbar-dark bg-dark">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent"
                        aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                </nav>

            </div>
            <div>
                <form>
                    <fieldset className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Search"
                            onChange={this.filterList.bind(this)}
                        />
                    </fieldset>
                </form>
                <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
                    <ul className="filter-list">
                        {this.state.uitems.map(function (item) {
                            return <li className="list-group-item" data-category={item} key={item}>
                                {item}
                                <div>
                                    <button type="button" class="btn btn-primary m-2">
                                        Donate Money
                  </button>
                                    <button type="button" class="btn btn-primary">
                                        Donate Goodies
                  </button>
                                </div>
                            </li>
                        }
                        )
                        }
                    </ul>
                </div>

            </div>
        </div >
        );
    }
}
export default FilteredList;
/* <div class="nav pull-right">

                    </div> */