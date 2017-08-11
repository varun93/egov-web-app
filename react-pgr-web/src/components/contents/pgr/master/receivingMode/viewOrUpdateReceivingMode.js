import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col, Table, DropdownButton} from 'react-bootstrap';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Api from '../../../../../api/api';
import {translate} from '../../../../common/common';

import $ from 'jquery';
import 'datatables.net-buttons/js/buttons.html5.js';// HTML 5 file export
import 'datatables.net-buttons/js/buttons.flash.js';// Flash file export
import jszip from 'jszip/dist/jszip';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

var flag = 0;
const styles = {
  headerStyle : {
    fontSize : 19
  },
  marginStyle:{
    margin: '15px'
  }
};

var _this;

class viewOrUpdateReceivingMode extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data:'',
        modify: false
      }
    }

    componentWillMount() {
      $('#searchTable').DataTable({
             dom: 'lBfrtip',
             buttons: [],
              bDestroy: true,
              language: {
                 "emptyTable": "No Records"
              }
        });
    }

    componentDidMount() {

        let {initForm}=this.props;
        initForm();
        var body = {}
        let  current = this;
        current.props.setLoadingStatus("loading");
        Api.commonApiPost("/pgr-master/receivingmode/v1/_search",{},body).then(function(response){
            current.setState({
              data:response.ReceivingModeType,
              modify: true
            });
            current.props.setLoadingStatus("hide");
        }).catch((error)=>{
            current.setState({
              modify: true
            });
            current.props.setLoadingStatus("hide");
        })
    }

    componentWillUpdate() {
      if(flag == 1) {
        flag = 0;
        $('#searchTable').dataTable().fnDestroy();
      }
    }

    componentWillUnmount(){
       $('#searchTable')
       .DataTable()
       .destroy(true);
    }

    componentDidUpdate() {
      if(this.state.modify) {
        $('#searchTable').DataTable({
              dom:'<"col-md-4"l><"col-md-4"B><"col-md-4"f>rtip',
              buttons: ['excel', 'pdf'],
              bDestroy: true,
              language: {
                 "emptyTable": "No Records"
              }
        });
      }
    }

    handleNavigation = (type, id) => {
      this.props.history.push(type+id);
    }

    render() {

      let {
        receivingCenterCreate,
        fieldErrors,
        isFormValid,
        isTableShow,
        handleUpload,
        files,
        handleChange,
        handleMap,
        handleChangeNextOne,
        handleChangeNextTwo,
        buttonText
      } = this.props;

      let url = this.props.location.pathname;

      return(
        <div className="receivingModeCreate">
            <Card style={styles.marginStyle}>
                <CardHeader style={{paddingBottom:0}}  title={<div style={styles.headerStyle}>{translate("pgr.lbl.receivingmode")}</div>} />
                <CardText style={{padding:0}}>
                    <Grid>
                        <Row>
                            <Col xs={12} md={12}>
                                <Table id="searchTable" bordered responsive className="table-striped">
                                    <thead>
                                        <tr>
                                          <th>#</th>
                                          <th>{translate("core.lbl.add.name")}</th>
                                          <th>{translate("core.lbl.code")}</th>
                                          <th>{translate("core.lbl.description")}</th>
                                          <th>Channel</th>
                                          <th>{translate("pgr.lbl.active")}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.data && this.state.data.map((e,i)=>{
                                          return(
                                            <tr key={i} onClick={()=>{
											  if(url == '/pgr/viewOrUpdateReceivingMode/view'){
												  this.props.history.push(`/pgr/viewReceivingMode/${this.props.match.params.type}/${e.id}`);
											  } else {
												  this.props.history.push(`/pgr/receivingModeCreate/${this.props.match.params.type}/${e.id}`);
											  }
											}}>
                                              <td>{i+1}</td>
                                              <td>{e.name}</td>
                                              <td>{e.code}</td>
                                              <td>{e.description}</td>
                                              <td>{e.channels}</td>
                                              <td>{e.active?"Yes":"No"}</td>
                                            </tr>
                                          )
                                        })}
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Grid>
                </CardText>
            </Card>
        </div>)
    }

}

const mapStateToProps = state => {
  return ({receivingCenterCreate: state.form.form, files: state.form.files, fieldErrors: state.form.fieldErrors, isFormValid: state.form.isFormValid,isTableShow:state.form.showTable,buttonText:state.form.buttonText});
}

const mapDispatchToProps = dispatch => ({
  initForm: () => {
    dispatch({
      type: "RESET_STATE",
      validationData: {
        required: {
          current: [],
          required: ["name","code","channel","description"]
        },
        pattern: {
          current: [],
          required: []
        }
      }
    });
  },

  handleChange: (e, property, isRequired, pattern) => {
    console.log("handlechange"+e+property+isRequired+pattern);
    dispatch({
      type: "HANDLE_CHANGE",
      property,
      value: e.target.value,
      isRequired,
      pattern
    });
  },

  setLoadingStatus: (loadingStatus) => {
    dispatch({type: "SET_LOADING_STATUS", loadingStatus});
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(viewOrUpdateReceivingMode);
