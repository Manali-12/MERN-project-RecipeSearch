import { Typography, makeStyles } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles({
    footerText: {
        margin: "auto 45% 0 45%",
        justifyContent: "spaceBetween",
        float: "bottom",
        position: "absolute",
        bottom: 0
    }
})

export default function Footer() {
    const classes = useStyles();
    const year = new Date().getFullYear();
    const footer = `© ${year} Kitchen Diaries`;
    return (
        <div className={classes.footerText}>
            <Typography variant="body2" color="textSecondary">
                {footer}
            </Typography>
        </div>
    )
}
