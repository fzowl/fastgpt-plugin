import { ModelTypeEnum, type ProviderConfigType } from '../../type';

// Voyage AI models, served by the AI Proxy `voyage` channel (type 60).
// `input_type` is set per usage so that stored chunks and search queries get the matching retrieval prompt.
// Voyage returns 1024-dimensional vectors by default; FastGPT zero-pads them to its fixed vector size.
const documentConfig = { input_type: 'document' };
const queryConfig = { input_type: 'query' };

const models: ProviderConfigType = {
  provider: 'Voyage',
  list: [
    {
      type: ModelTypeEnum.embedding,
      model: 'voyage-4-large',
      defaultToken: 512,
      maxToken: 32000,
      vision: false,
      dbConfig: documentConfig,
      queryConfig
    },
    {
      type: ModelTypeEnum.embedding,
      model: 'voyage-4',
      defaultToken: 512,
      maxToken: 32000,
      vision: false,
      dbConfig: documentConfig,
      queryConfig
    },
    {
      type: ModelTypeEnum.embedding,
      model: 'voyage-4-lite',
      defaultToken: 512,
      maxToken: 32000,
      vision: false,
      dbConfig: documentConfig,
      queryConfig
    },
    {
      type: ModelTypeEnum.embedding,
      model: 'voyage-code-4',
      defaultToken: 512,
      maxToken: 32000,
      vision: false,
      dbConfig: documentConfig,
      queryConfig
    },
    {
      type: ModelTypeEnum.embedding,
      model: 'voyage-3-large',
      defaultToken: 512,
      maxToken: 32000,
      vision: false,
      dbConfig: documentConfig,
      queryConfig
    },
    {
      type: ModelTypeEnum.embedding,
      model: 'voyage-3.5',
      defaultToken: 512,
      maxToken: 32000,
      vision: false,
      dbConfig: documentConfig,
      queryConfig
    },
    {
      type: ModelTypeEnum.embedding,
      model: 'voyage-3.5-lite',
      defaultToken: 512,
      maxToken: 32000,
      vision: false,
      dbConfig: documentConfig,
      queryConfig
    },
    {
      type: ModelTypeEnum.embedding,
      model: 'voyage-code-3',
      defaultToken: 512,
      maxToken: 32000,
      vision: false,
      dbConfig: documentConfig,
      queryConfig
    },
    {
      type: ModelTypeEnum.embedding,
      model: 'voyage-finance-2',
      defaultToken: 512,
      maxToken: 32000,
      vision: false,
      dbConfig: documentConfig,
      queryConfig
    },
    {
      type: ModelTypeEnum.embedding,
      model: 'voyage-law-2',
      defaultToken: 512,
      maxToken: 16000,
      vision: false,
      dbConfig: documentConfig,
      queryConfig
    },
    {
      type: ModelTypeEnum.embedding,
      model: 'voyage-multimodal-3.5',
      defaultToken: 512,
      maxToken: 32000,
      vision: true,
      dbConfig: documentConfig,
      queryConfig
    },
    {
      type: ModelTypeEnum.embedding,
      model: 'voyage-multimodal-3',
      defaultToken: 512,
      maxToken: 32000,
      vision: true,
      dbConfig: documentConfig,
      queryConfig
    },
    {
      type: ModelTypeEnum.rerank,
      model: 'rerank-3',
      maxToken: 32000
    },
    {
      type: ModelTypeEnum.rerank,
      model: 'rerank-3-lite',
      maxToken: 32000
    },
    {
      type: ModelTypeEnum.rerank,
      model: 'rerank-2.5',
      maxToken: 32000
    },
    {
      type: ModelTypeEnum.rerank,
      model: 'rerank-2.5-lite',
      maxToken: 32000
    }
  ]
};

export default models;
