import React from 'react';

import { Icon } from '@chakra-ui/react';
import {
  MdHome,
  MdLock,
  MdSettings,
  MdSentimentSatisfied,
  MdDescription,
  MdApi,
} from 'react-icons/md';

// Admin Imports
import MainDashboard from 'views/admin/default';
import AISettings from 'views/admin/aiSettings';
import SentimentAnalysis from 'views/admin/sentimentAnalysis';
import Reports from 'views/admin/reports';
import ApiDocs from 'views/admin/apiDocs';

// Auth Imports
import SignInCentered from 'views/auth/signIn';

const routes = [
  {
    name: 'nav.dashboard',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
  },
  {
    name: 'nav.sentimentAnalysis',
    layout: '/admin',
    path: '/sentiment-analysis',
    icon: <Icon as={MdSentimentSatisfied} width="20px" height="20px" color="inherit" />,
    component: <SentimentAnalysis />,
  },
  {
    name: 'nav.aiSettings',
    layout: '/admin',
    path: '/ai-settings',
    icon: <Icon as={MdSettings} width="20px" height="20px" color="inherit" />,
    component: <AISettings />,
  },
  {
    name: 'nav.reports',
    layout: '/admin',
    path: '/reports',
    icon: <Icon as={MdDescription} width="20px" height="20px" color="inherit" />,
    component: <Reports />,
  },
  {
    name: 'nav.apiDocs',
    layout: '/admin',
    path: '/api-docs',
    icon: <Icon as={MdApi} width="20px" height="20px" color="inherit" />,
    component: <ApiDocs />,
  },
  {
    name: 'nav.signIn',
    layout: '/auth',
    path: '/sign-in',
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: <SignInCentered />,
    invisible: true, // Hide from sidebar
  },
];

export default routes;
