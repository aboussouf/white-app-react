import React from 'react';
import PropTypes from 'prop-types';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

import IconButton from 'material-ui/IconButton';
import { red400 } from 'material-ui/styles/colors';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';


const ProspectsList = ({ prospects, handleDelete }) => (
  <Table
    multiSelectable={false}
    selectable={false}
  >
    <TableHeader>
      <TableRow selectable={false}>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Nom complet</TableHeaderColumn>
        <TableHeaderColumn>Email</TableHeaderColumn>
        <TableHeaderColumn>Sexe</TableHeaderColumn>
        <TableHeaderColumn>Telephone</TableHeaderColumn>
        <TableHeaderColumn>Actions</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      {prospects
        && prospects.map((prospect) =>
          (<TableRow key={`prospect_${prospect.id}`} selectable={false}>
            <TableRowColumn>{prospect.id}</TableRowColumn>
            <TableRowColumn>{prospect.lastName} {prospect.firstName}</TableRowColumn>
            <TableRowColumn>{prospect.email}</TableRowColumn>
            <TableRowColumn>{prospect.sexe}</TableRowColumn>
            <TableRowColumn>{prospect.tele}</TableRowColumn>
            <TableRowColumn>
              <IconButton onClick={handleDelete(prospect)}>
                <ActionDeleteForever color={red400} />
              </IconButton>
            </TableRowColumn>
          </TableRow>)
      )}
    </TableBody>
  </Table>
    );
ProspectsList.propTypes = {
  prospects: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};


export default ProspectsList;
