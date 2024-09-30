import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from "prop-types";
import {Controller} from "react-hook-form";


export default function MultiSelect({items, label, control}) {
    return (
        <div>
            <Controller
                name={"cuisines"}
                control={control}
                render={({field: {onChange, value}}) => {
                    const handleChange = (e) => {
                        onChange(e.target.value);
                    }
                    return (
                        <FormControl sx={{my: 1}} fullWidth>
                            <InputLabel id="demo-multiple-name-label">{label}</InputLabel>
                            <Select
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                multiple
                                onChange={handleChange}
                                defaultValue={value || []}
                                input={<OutlinedInput label={label}/>}
                            >
                                {items.map((item, i) => (
                                    <MenuItem
                                        key={i}
                                        value={item.id}
                                    >
                                        {item.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )
                }}/>
        </div>
    );
}

MultiSelect.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    label: PropTypes.string.isRequired,
    control: PropTypes.object.isRequired,
}
