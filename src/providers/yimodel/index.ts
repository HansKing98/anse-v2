import {
  handlePrompt,
  handleRapidPrompt,
} from './handler'
import type { Provider } from '@/types/provider'

const providerOpenAI = () => {
  const provider: Provider = {
    id: 'provider-yi',
    icon: 'i-simple-icons-robot', // @unocss-include
    name: 'Yi Model',
    globalSettings: [
      {
        key: 'apiKey',
        name: 'API Key - platform.lingyiwanwu.com',
        type: 'api-key',
      },
      {
        key: 'baseUrl',
        name: 'Base URL',
        description: 'Custom base url for Yi Model API.',
        type: 'input',
        default: 'https://api.lingyiwanwu.com',
      },
      {
        key: 'model',
        name: 'Yi model',
        description: 'Custom gpt model for Yi Model API.',
        type: 'select',
        options: [
          { value: 'yi-large', label: 'yi-large' },
          { value: 'yi-large-turbo', label: 'yi-large-turbo' },
          { value: 'yi-large-rag', label: 'yi-large-rag' },
          { value: 'yi-medium', label: 'yi-medium' },
          { value: 'yi-medium-200k', label: 'yi-medium-200k' },
          { value: 'yi-spark', label: 'yi-spark' },
          { value: 'yi-vision', label: 'yi-vision' },
          //
          { value: 'yi-34b-chat-0205', label: 'yi-34b-chat-0205' },
          { value: 'yi-34b-chat-200k', label: 'yi-34b-chat-200k' },
          { value: 'yi-vl-plus', label: 'yi-vl-plus-多模态' },
        ],
        default: 'yi-large',
      },
      {
        key: 'maxTokens',
        name: 'Max Tokens',
        description: 'The maximum number of tokens to generate in the completion.',
        type: 'slider',
        min: 0,
        max: 32768,
        default: 2048,
        step: 1,
      },
      {
        key: 'messageHistorySize',
        name: 'Max History Message Size',
        description: 'The number of retained historical messages will be truncated if the length of the message exceeds the MaxToken parameter.',
        type: 'slider',
        min: 1,
        max: 24,
        default: 5,
        step: 1,
      },
      {
        key: 'temperature',
        name: 'Temperature',
        type: 'slider',
        description: 'What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.',
        min: 0,
        max: 2,
        default: 0.7,
        step: 0.01,
      },
      {
        key: 'top_p',
        name: 'Top P',
        description: 'An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.',
        type: 'slider',
        min: 0,
        max: 1,
        default: 1,
        step: 0.01,
      },
    ],
    bots: [
      {
        id: 'chat_continuous',
        type: 'chat_continuous',
        name: 'Continuous Chat',
        settings: [],
      },
      {
        id: 'chat_single',
        type: 'chat_single',
        name: 'Single Chat',
        settings: [],
      },
      {
        id: 'image_generation',
        type: 'image_generation',
        name: 'DALL·E',
        settings: [],
      },
    ],
    handlePrompt,
    handleRapidPrompt,
  }
  return provider
}

export default providerOpenAI
