// TODO: for serialisation, create optimised format and types that can be loaded to/from the runtime

export type ID = string

export type User = {
    id: ID
    /** Username, firstname, or full name depending on what the person is comfortable sharing */
    name: string
}

export type Group = {
    id: ID
    /** Human-friendly group name */
    name: string
    /** People in this group */
    members: User[]
    /** All contributions that has happened in this group  */
    contributions: Contribution[]
    /** Reflections made together by group members */
    reflections: Reflection[]
}

export type Contribution = {
    id: ID
    /** Short title to describe this contribution */
    title: string
    /** Time used, in minutes */
    time: Number
    /** The person who registered this contribution in the app */
    creator: User
    /** The people involved in this contribution */
    people: User[]
}

type DateRange = [Date, Date]

export type Reflection = {
    id: ID
    contributions: Contribution[]
    idealContributions: Contribution[]
    period: DateRange
    comments: Comment[]
}

export type Comment = {
    id: ID
    user: User
    text: string
    topic: Topic
}

/** A reflection question */
export type Topic = {
    id: ID
    text: string
}
