import React from 'react';
import { Typography, Grid, TextField, Button } from '@material-ui/core';
import {
  InfoCard,
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
  SupportButton,
} from '@backstage/core-components';
import AccountCircle from '@material-ui/icons/AccountCircle';

export const ExampleComponent = () => (
  <Page themeId="tool">
    <Header title="Welcome to the OpenShift Discovery tool!" subtitle="We want to help you get started with your migration between OpenShift Platforms. Enter a few bits of into about your app, and we'll see what we can discover.">
      <HeaderLabel label="Owner" value="Team X" />
      <HeaderLabel label="Lifecycle" value="Alpha" />
    </Header>
    <Content>
      <ContentHeader title="Let's get started...">
        <SupportButton>Give us some info about you and your app in the form below, then hit <i>Next</i>.</SupportButton>
      </ContentHeader>
      <Grid container spacing={3} direction="column">
        <Grid item>
          <InfoCard title="What app are we working on?">
            <Typography variant='body1'>
              <form>
                <div>
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                      <AccountCircle />
                    </Grid>
                    <Grid item>
                      <TextField id="team-name" label="Team Name" />
                    </Grid>
                  </Grid>
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                      <AccountCircle />
                    </Grid>
                    <Grid item>
                      <TextField id="cluster-name" label="Cluster Name" />
                    </Grid>
                  </Grid>
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                      <AccountCircle />
                    </Grid>
                    <Grid item>
                      <TextField id="app-name" label="Application Name" />
                    </Grid>
                  </Grid>
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                      <Button variant="contained" color="primary">Next: Review</Button>
                    </Grid>
                  </Grid>
                </div>
              </form>
            </Typography>
          </InfoCard>
        </Grid>
      </Grid>
    </Content>
  </Page>
);
