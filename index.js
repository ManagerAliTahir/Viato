/** @format */
import Amplify from 'aws-amplify'
import Auth from '@aws-amplify/auth';
import config from './aws-exports'
Amplify.configure(config);
Auth.configure(config);
import BaseFile from './components/RootExport';
import {name as appName} from './app.json';
