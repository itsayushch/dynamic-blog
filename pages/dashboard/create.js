import { useUser } from '../../lib/hooks';
import { useState } from 'react';
import Layout from '../../components/Layout';
import Router from 'next/router';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	appBar: {
		position: 'relative',
	},
	layout: {
		width: 'auto',
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
			width: 600,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		padding: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
			marginTop: theme.spacing(6),
			marginBottom: theme.spacing(6),
			padding: theme.spacing(3),
		},
	},
	stepper: {
		padding: theme.spacing(3, 0, 5),
	},
	buttons: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
	button: {
		marginTop: theme.spacing(3),
		marginLeft: theme.spacing(1),
	},
}));

export default function CreateArticle() {
	const user = useUser({ redirectTo: '/login' });
	const classes = useStyles();
	const [submitted, setSubmitted] = useState(false);
	const [data, setData] = useState({});

	const onSubmit = async (e) => {
		e.preventDefault();
		const body = {
			title: e.currentTarget.title.value,
			description: e.currentTarget.description.value,
			image: e.currentTarget.image.value,
			body: e.currentTarget.body.value,
			slug: e.currentTarget.slug.value
		}

		setData(body);

		try {
			const res = await fetch('/api/post', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			})
			if (res.status === 200) {
				setSubmitted(true);
			}
		} catch (error) {
			console.error('An unexpected error happened occurred:', error)
		}
	}

	return (
		<Layout>
			<main className={classes.layout}>
				<Paper className={classes.paper}>
					{submitted ? (
						<>
							<Typography variant="h3" gutterBottom>
								Article Uploaded
                			</Typography>
							<Typography variant="subtitle1">
								The Article has been successfully uploaded. <br /><br />

								<strong>Title</strong><br />
								{data.title}<br /><br />

								<strong>Description</strong><br />
								{data.description}<br /><br />

								<div className={classes.buttons}>
									<Button
										variant="contained"
										color="primary"
										onClick={() => Router.push('/dashboard')}
										className={classes.button}
									>
										Dashboard
                  					</Button>
								</div>
							</Typography>
						</>
					) : (
							<form onSubmit={onSubmit}>
								<Typography variant="h6" gutterBottom>
									Write an article
      							</Typography>
								<Grid container spacing={3}>
									<Grid item xs={12} sm={6}>
										<TextField
											required
											id="title"
											name="title"
											label="Title"
											fullWidth
											variant="outlined"
											autoComplete="given-name"
										/>
									</Grid>
									<Grid item xs={12} sm={6}>
										<TextField
											required
											id="slug"
											name="slug"
											label="Slug"
											fullWidth
											variant="outlined"
											autoComplete="family-name"
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											required
											id="description"
											name="description"
											label="Description"
											fullWidth
											variant="outlined"
											autoComplete="shipping address-line1"
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											id="image"
											name="image"
											label="Image URL"
											fullWidth
											variant="outlined"
											required
											autoComplete="shipping address-line2"
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											id="outlined-multiline-static"
											label="Body"
											name="body"
											multiline
											rows={15}
											fullWidth
											required
											variant="outlined"
										/>
									</Grid>
								</Grid>
								<div className={classes.buttons}>
									<Button
										variant="contained"
										color="primary"
										type='submit'
										className={classes.button}
									>
										Submit
                  					</Button>
								</div>
							</form>
						)}
				</Paper>
			</main>
		</Layout>
	);
}