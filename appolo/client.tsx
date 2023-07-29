// Container component
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://bukedea.stepzen.net/api/oldfashioned-otter/__graphql',
    headers: {'Authorization':'apikey bukedea::stepzen.io+1000::2950b13db206ba53288c66861249e9b4f6bef5fb9589da710e0b0e8f42c00109'},
    cache: new InMemoryCache(),
});

export default client;