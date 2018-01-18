import React from 'react';
import TextField from 'material-ui/TextField';

const UiAadharCard = props => {
  const renderAadharCard = () => {
    const { item, ui } = { props };
    switch (ui) {
      case 'google':
        return (
          <TextField
            id={item.jsonPath.split('.').join('-')}
            className="custom-form-control-for-textfield"
            floatingLabelStyle={{
              color: item.isDisabled ? '#A9A9A9' : '#696969',
              fontSize: '20px',
              whiteSpace: 'nowrap',
            }}
            inputStyle={{ color: '#5F5C57' }}
            floatingLabelFixed={true}
            style={{ display: item.hide ? 'none' : 'inline-block' }}
            errorStyle={{ float: 'left' }}
            fullWidth={true}
            maxLength="12"
            type="text"
            floatingLabelText={
              <span>
                {item.label} <span style={{ color: '#FF0000' }}>{item.isRequired ? ' *' : ''}</span>
              </span>
            }
            value={props.getVal(item.jsonPath)}
            disabled={item.isDisabled}
            errorText={props.fieldErrors[item.jsonPath]}
            onChange={e => {
              if (e.target.value && !/^\d*$/g.test(e.target.value)) return;
              props.handler(e, item.jsonPath, item.isRequired ? true : false, '^\\d{12}$', item.requiredErrMsg, item.patternErrMsg);
            }}
          />
        );
    }
  };

  return renderAadharCard();
};

export default UiAadharCard;
