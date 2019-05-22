import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import App from './App';
// import './index.css';
import * as serviceWorker from './serviceWorker';
import { AUTH_TOKEN } from './constants'

const cache = new InMemoryCache();

const BACKEND_BASE_URL = 'http://localhost:8080/graphql';

localStorage.setItem(AUTH_TOKEN, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTU4NDc5OTY5LCJleHAiOjE1NTkwODQ3Njl9.zy3GR3dJ_B3f5tDT8LYSYRplh4Kxdae_TrYXlLDPd0iRWwdvOnHVvsuRonzqRO4OD3c4-YT7q_leFh50WFfU7A')
const token = localStorage.getItem(AUTH_TOKEN)

const httpLink = new HttpLink({
    uri: BACKEND_BASE_URL,
    headers: {
        authorization: `Bearer ${token}`
        // authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTU4NDc5OTY5LCJleHAiOjE1NTkwODQ3Njl9.zy3GR3dJ_B3f5tDT8LYSYRplh4Kxdae_TrYXlLDPd0iRWwdvOnHVvsuRonzqRO4OD3c4-YT7q_leFh50WFfU7A`
    }
});

export const client = new ApolloClient({link: httpLink, cache});

ReactDOM.render(
    <ApolloProvider client={client}>
    <div>
        {"test1"}
    </div>
    <App/>
</ApolloProvider>, document.getElementById('root'),);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls. Learn
// more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
