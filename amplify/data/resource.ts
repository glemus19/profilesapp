import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
    // Replace or add this model:
    UserProfile: a.model({
        email: a.string().required(),
    }),
    // Optional: keep or remove Todo
    // Todo: a.model({
    //   content: a.string(),
    // }).authorization((allow) => [allow.guest()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
    schema,
    authorizationModes: {
        defaultAuthorizationMode: 'userPool', // <-- user auth, not guest
    },
});
