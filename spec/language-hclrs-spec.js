const {it, fit, ffit, afterEach, beforeEach} = require('./async-spec-helpers') // eslint-disable-line no-unused-vars

describe('HCLRS grammar', () => {
  let grammar

  beforeEach(async () => {
    await atom.packages.activatePackage('language-hclrs')
    grammar = atom.grammars.grammarForScopeName('source.hclrs')
  })

  it('parses the grammar', () => {
    expect(grammar).toBeTruthy()
    expect(grammar.scopeName).toBe('source.hclrs')
  })
})
