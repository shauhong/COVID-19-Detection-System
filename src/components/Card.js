import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ChevronRightRounded from '@material-ui/icons/ChevronRightRounded';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia/wide';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import { useBouncyShadowStyles } from '@mui-treasury/styles/shadow/bouncy';
import {Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(() => ({
    root: {
      maxWidth: 304,
      margin: 'auto',
      boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
      borderRadius: 0,
      padding: 20,
    },
    content: {
      padding: 24,
    },
    cta: {
      marginTop: 24,
      textTransform: 'initial',
      backgroundColor:'#85C1E9',
      color:"white",

    },
  }));

export default function PatientCard(props){

    

    const{
        name,
        IC,
        gender,
        age,
        CXR,
        status,
    } = props;


    const styles = useStyles();
    const mediaStyles = useWideCardMediaStyles();
    const textCardContentStyles = useN01TextInfoContentStyles();
    const shadowStyles = useBouncyShadowStyles();

    return (
        <Card className={cx(styles.root, shadowStyles.root)}>
          <CardMedia
            classes={mediaStyles}
            image={props.CXR}
          />
          <CardContent className={styles.content}>
            <TextInfoContent
              classes={textCardContentStyles}
              heading={props.name}
              body={status}
            />
            <Link to = '/patients/1'>
              <Button color={'primary'} fullWidth className={styles.cta}>
                More Details <ChevronRightRounded />
              </Button>
            </Link>
            
          </CardContent>
        </Card>
      );



}