import { DummyIssues } from './dummyIssues'

export async function GET() {
    return Response.json(DummyIssues);
}

/**
 * import DummyIssues from './dummyIssues.json';

export async function GET() {
    return new Response(JSON.stringify(DummyIssues), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
 */