import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from "prop-types";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function MultiSelect({names, label, defaultNames}) {
    const theme = useTheme();
    const [selectedName, setSelectedName] = React.useState(defaultNames);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setSelectedName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{ my: 1}} fullWidth>
                <InputLabel id="demo-multiple-name-label">{label}</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={selectedName}
                    onChange={handleChange}
                    input={<OutlinedInput label={label} />}
                    MenuProps={MenuProps}
                >
                    {names.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, selectedName, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

MultiSelect.propTypes = {
    names: PropTypes.arrayOf(PropTypes.string),
    label: PropTypes.string,
    defaultNames: PropTypes.arrayOf(PropTypes.string),
}
