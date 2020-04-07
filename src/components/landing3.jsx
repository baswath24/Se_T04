import React, { Component } from "react";

class FilteredListNGO extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sigInName: this.props.n.name,
            initialItems: [

            ],
            uitems: [

            ],

        };


        // console.log(this.state.uitems);
    }
    componentDidMount() {
        this.onsignin();
    }
    onsignin() {
        fetch('https://channelngo2.herokuapp.com/profile', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: this.state.sigInName })
        }).then(response => response.json())
            .then(data => {
                var updatedList = [];
                //console.log(data);
                updatedList = data.map(x => x.eventName);

                this.state.initialItems = updatedList;
                this.state.uitems = updatedList;
                this.setState({ initialItems: updatedList });
                this.setState({ uitems: updatedList });
                console.log(this.state.uitems);
            })
    }
    filterList(input) {

        var updatedList = this.state.initialItems;
        updatedList = updatedList.filter(function (item) {
            return item.toLowerCase().search(input.target.value) !== -1;
        });
        this.setState({ uitems: updatedList });
    }

    addEvent(input) {

        var eventName = document.getElementById("eventName").value;

        var eventDescription = document.getElementById("eventDesc").value;

        document.getElementById("eventName").value = '';
        document.getElementById("eventDesc").value = '';
        if (eventName !== '' && eventDescription !== '') {

            fetch('https://channelngo2.herokuapp.com/addevent', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: this.state.sigInName,
                    eventName: eventName,
                    eventDescription: eventDescription
                })
            }).then(response => response.json())
                .then(data => {
                    /*  updatedList = data.forEach(function (item) {
                         return item.eventName; */
                    // console.log(data);
                    let updatedList = [];
                    updatedList = data.map(x => x.eventName)
                    // 
                    this.setState({ uitems: updatedList });
                    this.setState({ initialItems: updatedList });
                    // console.log(this.state.uitems);
                })

            //updatedList.push(eventName);

        }
        //console.log(this.state.uitems);
        //console.log(eventDescription);
    }

    render() {
        //console.log('http://localhost:3000/profile' + this.state.sigInName);

        return (<div>
            <div class="pos-f-t m-2">
                <div class="collapse" id="navbarToggleExternalContent">
                    <div class="bg-dark p-4">
                        <h4 class="text-white">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#">profile</a>
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
            <div className="float-left">
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
            <div className='float-right m-2'>
                <form>
                    <h2>Add a New event</h2>
                    <input
                        type="text"
                        className="form-control form-control-ig"
                        placeholder="Event Name"
                        title="Name of the Event"
                        id="eventName"
                    />
                    <input

                        type="text"
                        className="form-control form-control-ig"
                        placeholder="Event description"
                        title="Event Detailing"
                        id="eventDesc"
                    />
                    <button type="submit" class="btn btn-primary m-2" onClick={this.addEvent.bind(this)}>
                        Add
            </button>
                </form>
            </div>
        </div>

        );
    }
}

export default FilteredListNGO;