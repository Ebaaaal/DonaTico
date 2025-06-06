/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AboutImport } from './routes/about'
import { Route as RegisterImport } from './routes/Register'
import { Route as LoginImport } from './routes/Login'
import { Route as HomePageImport } from './routes/HomePage'
import { Route as FooterImport } from './routes/Footer'
import { Route as DonationImport } from './routes/Donation'
import { Route as CreateDonationImport } from './routes/CreateDonation'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const RegisterRoute = RegisterImport.update({
  id: '/Register',
  path: '/Register',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  id: '/Login',
  path: '/Login',
  getParentRoute: () => rootRoute,
} as any)

const HomePageRoute = HomePageImport.update({
  id: '/HomePage',
  path: '/HomePage',
  getParentRoute: () => rootRoute,
} as any)

const FooterRoute = FooterImport.update({
  id: '/Footer',
  path: '/Footer',
  getParentRoute: () => rootRoute,
} as any)

const DonationRoute = DonationImport.update({
  id: '/Donation',
  path: '/Donation',
  getParentRoute: () => rootRoute,
} as any)

const CreateDonationRoute = CreateDonationImport.update({
  id: '/CreateDonation',
  path: '/CreateDonation',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/CreateDonation': {
      id: '/CreateDonation'
      path: '/CreateDonation'
      fullPath: '/CreateDonation'
      preLoaderRoute: typeof CreateDonationImport
      parentRoute: typeof rootRoute
    }
    '/Donation': {
      id: '/Donation'
      path: '/Donation'
      fullPath: '/Donation'
      preLoaderRoute: typeof DonationImport
      parentRoute: typeof rootRoute
    }
    '/Footer': {
      id: '/Footer'
      path: '/Footer'
      fullPath: '/Footer'
      preLoaderRoute: typeof FooterImport
      parentRoute: typeof rootRoute
    }
    '/HomePage': {
      id: '/HomePage'
      path: '/HomePage'
      fullPath: '/HomePage'
      preLoaderRoute: typeof HomePageImport
      parentRoute: typeof rootRoute
    }
    '/Login': {
      id: '/Login'
      path: '/Login'
      fullPath: '/Login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/Register': {
      id: '/Register'
      path: '/Register'
      fullPath: '/Register'
      preLoaderRoute: typeof RegisterImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/CreateDonation': typeof CreateDonationRoute
  '/Donation': typeof DonationRoute
  '/Footer': typeof FooterRoute
  '/HomePage': typeof HomePageRoute
  '/Login': typeof LoginRoute
  '/Register': typeof RegisterRoute
  '/about': typeof AboutRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/CreateDonation': typeof CreateDonationRoute
  '/Donation': typeof DonationRoute
  '/Footer': typeof FooterRoute
  '/HomePage': typeof HomePageRoute
  '/Login': typeof LoginRoute
  '/Register': typeof RegisterRoute
  '/about': typeof AboutRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/CreateDonation': typeof CreateDonationRoute
  '/Donation': typeof DonationRoute
  '/Footer': typeof FooterRoute
  '/HomePage': typeof HomePageRoute
  '/Login': typeof LoginRoute
  '/Register': typeof RegisterRoute
  '/about': typeof AboutRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/CreateDonation'
    | '/Donation'
    | '/Footer'
    | '/HomePage'
    | '/Login'
    | '/Register'
    | '/about'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/CreateDonation'
    | '/Donation'
    | '/Footer'
    | '/HomePage'
    | '/Login'
    | '/Register'
    | '/about'
  id:
    | '__root__'
    | '/'
    | '/CreateDonation'
    | '/Donation'
    | '/Footer'
    | '/HomePage'
    | '/Login'
    | '/Register'
    | '/about'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  CreateDonationRoute: typeof CreateDonationRoute
  DonationRoute: typeof DonationRoute
  FooterRoute: typeof FooterRoute
  HomePageRoute: typeof HomePageRoute
  LoginRoute: typeof LoginRoute
  RegisterRoute: typeof RegisterRoute
  AboutRoute: typeof AboutRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  CreateDonationRoute: CreateDonationRoute,
  DonationRoute: DonationRoute,
  FooterRoute: FooterRoute,
  HomePageRoute: HomePageRoute,
  LoginRoute: LoginRoute,
  RegisterRoute: RegisterRoute,
  AboutRoute: AboutRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/CreateDonation",
        "/Donation",
        "/Footer",
        "/HomePage",
        "/Login",
        "/Register",
        "/about"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/CreateDonation": {
      "filePath": "CreateDonation.tsx"
    },
    "/Donation": {
      "filePath": "Donation.tsx"
    },
    "/Footer": {
      "filePath": "Footer.tsx"
    },
    "/HomePage": {
      "filePath": "HomePage.tsx"
    },
    "/Login": {
      "filePath": "Login.tsx"
    },
    "/Register": {
      "filePath": "Register.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
