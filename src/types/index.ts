export type SearchSlice = {
    searchQuery: {
        value: string;
    };
};

export type GiphyData = {
    id: string;
    images: {
        fixed_width: {
            url: string;
        };
    };
    title: string;
};

export type GlobalObjectString = {
    [key: string]: string;
};

export type GiphySearchResult = {
    data: GiphyData[];
    pagination: {
        total_count: number;
        count: number;
        offset: number;
    };
    meta: {
        status: number;
        msg: string;
        response_id: string;
    };
};
