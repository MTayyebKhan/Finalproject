import React, { useState } from 'react'
import Progressbar from '../Progress/progressbar'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import Completed from '../Chores/completed'
import Uncompleted from '../Chores/uncompleted'
import Grid from '@material-ui/core/Grid'
import Topreward from '../Chores/topreward'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Progressbar />
        <Grid container spacing={1}>
            <Grid item xs={6}>
        <Completed />
        </Grid>
        <Grid item xs={6}>
        <Uncompleted />
        </Grid>
        <Grid item xs={12}>
        <Topreward />
        </Grid>
        </Grid>
        </>
    )
}

export default Home;