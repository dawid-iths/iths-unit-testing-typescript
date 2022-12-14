import { render, screen, waitFor, within } from '@testing-library/react';

export const assetsFetchMock = () => Promise.resolve({
    ok: true,
    status: 200,
    json: async () => { }
} as Response);

describe("Testing the Assets Service", () => {

    let fetchMock: any = undefined;

    beforeEach(() => {
        fetchMock = jest.spyOn(global, "fetch").mockImplementation(assetsFetchMock);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('Fetch has been called', () => {
        const baseUrl = "https://myurl.com"
        // expect(fetchMock).toHaveBeenCalled();
        // expect(fetchMock).toHaveBeenCalledWith(baseUrl);
    });
});