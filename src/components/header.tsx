import React, { memo, useEffect, useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";

import logo from "../images/logo.svg";
import { searchUsers } from "../services";
import styles from "./header.module.css";

export type Option = {
  login: string;
};

export type SearchData = {
  items: Array<Option>;
};

export interface HeaderProps {
  label: string;
  onChange: Function;
}

const Header: React.FC<HeaderProps> = ({ label, onChange }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([] as Array<Option>);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (value.length > 2) {
      setIsLoading(true);
      searchUsers(value)
        .then((data: SearchData) => setOptions(data.items))
        .catch((err) => console.error(err))
        .finally(() => setIsLoading(false));
    } else setOptions([]);
  }, [value]);

  return (
    <div className={styles.header}>
      <img src={logo} alt="GitHub logo" className={styles.logo} />
      <div className={styles.label}>{label}</div>
      <div className={styles.searchContainer}>
        <Autocomplete
          className={styles.search}
          getOptionLabel={(item) => item.login}
          inputValue={value}
          onChange={(evt, option) => onChange(option?.login || "")}
          onInputChange={(evt, value) => setValue(value)}
          options={options || []}
          renderInput={(params) => (
            <TextField
              {...params}
              autoFocus={true}
              fullWidth={true}
              label="Search"
              size="small"
              variant="outlined"
            />
          )}
        />
        {isLoading && <CircularProgress className={styles.searchProgress} />}
      </div>
    </div>
  );
};

export default memo(Header);
