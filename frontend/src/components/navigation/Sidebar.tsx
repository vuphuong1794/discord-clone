import React from "react";
import classes from "./Sidebar.module.css";
import { Button, Center } from "@mantine/core";
import { IconArrowsJoin, IconPlus } from "@tabler/icons-react";

function Sidebar() {
  return (
    <nav className={classes.navbar}>
      <Center>
        <Button
          className={classes.link}
          variant="subtle"
          radius={100}
          onClick={() => {}}
        >
          <IconPlus radius={100} />
        </Button>
      </Center>
      <Center>
        <Button
          className={classes.link}
          variant="subtle"
          radius={100}
          onClick={() => {}}
        >
          <IconArrowsJoin radius={100} />
        </Button>
      </Center>
    </nav>
  );
}

export default Sidebar;
