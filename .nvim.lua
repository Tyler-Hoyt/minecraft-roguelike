-- Project-local Neovim config for minecraft-roguelike
-- Loaded automatically because vim.opt.exrc = true in your main config.

-- Inject .vscode into blink.cmp's snippets search_paths before the source
-- is lazily initialized (happens on first completion trigger).
local ok, blink_config = pcall(require, "blink.cmp.config")
if ok then
  local provider = blink_config.sources.providers.snippets
  if provider then
    provider.opts = provider.opts or {}
    provider.opts.search_paths = provider.opts.search_paths or {}
    table.insert(provider.opts.search_paths, vim.fn.getcwd() .. "/.vscode")
  end
end
