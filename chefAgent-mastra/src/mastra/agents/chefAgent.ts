import { openai } from "@ai-sdk/openai";
import { Agent } from "@mastra/core/agent";
 
export const chefAgent = new Agent({
  name: "chef-agent",
  instructions: "あなたは優秀な料理人です。質問者が手元にある食材を入力したら、その食材を使ったレシピを提案してください。",
  model: openai("gpt-4o-mini"),
});