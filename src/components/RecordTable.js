import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class RecordTable extends Component {
    constructor() {
        super();
        this.people = [
            {
                name: "Veronica Mize",
                dob: "11/29/2011"
            }, {
                name: "Cecilia Olsson",
                dob: "09/16/1992"
            }, {
                name: "Peter Parker",
                dob: "01/16/1992"
            }, {
                name: "Jimmy Shergil",
                dob: "12/12/2001"
            }, {
                name: "Alexander Alfred",
                dob: "02/09/1891"
            }, {
                name: "Janice Shroyer",
                dob: "12/01/1982"
            }, {
                name: "Ralph White",
                dob: "11/30/2011"
            }, {
                name: "Deborah T. Decker",
                dob: "10/31/1999"
            }
        ];
    }

    mapListToTable()
    {
        if(this.props.order){
        this.people.sort(function(a,b){
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();

            return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
        });}
        else{
           
                this.people.sort(function(a,b){
                    var dbA = Date.parse(a.dob);
                    var dbB = Date.parse(b.dob);

                    return (dbA < dbB) ? -1 : (dbA > dbB) ? 1 : 0;
                });
        }

        console.log(this.props);
        let items = this.people.map((s)=> <TableRow>
        <TableCell className="table-header">{s.name}</TableCell>
        <TableCell className="table-header">{s.dob}</TableCell>
    </TableRow>);

    return items;
    }

    render() {
        return (
            <Paper className="width">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className="table-header">Name</TableCell>
                            <TableCell className="table-header">Date of Birth</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                                {this.mapListToTable()}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default RecordTable;
