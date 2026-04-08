content = open('index.html', 'r', encoding='utf-8').read()

# Remove the corrupted section and replace with clean version
old = (
    '                   <button onclick="openAuthModal(\'signup\')"\r\n'
    '                      class="w-full mt-auto py-4 border border-white/20 rounded-full font-black text-white hover:bg-white hover:text-black transition-all uppercase text-sm t\r\n'
    '             </div>\r\n'
    '          </div>\r\n'
    '       </section>\r\n'
    'inter">Começar com R$ 80</button>\r\n'
    '                 </div>\r\n'
    '\r\n'
    '             </div>\r\n'
    '          </div>\r\n'
    '       </section>'
)

new = (
    '                   <button onclick="openAuthModal(\'signup\')"\r\n'
    '                      class="w-full mt-auto py-4 border border-white/20 rounded-full font-black text-white hover:bg-white hover:text-black transition-all uppercase text-sm text-center cursor-pointer">Começar com R$ 20</button>\r\n'
    '                </div>\r\n'
    '\r\n'
    '            </div>\r\n'
    '         </div>\r\n'
    '      </section>'
)

if old in content:
    content = content.replace(old, new)
    open('index.html', 'w', encoding='utf-8').write(content)
    print('Fixed successfully!')
else:
    print('Pattern not found. Trying with \\n...')
    old2 = old.replace('\r\n', '\n')
    new2 = new.replace('\r\n', '\n')
    if old2 in content:
        content = content.replace(old2, new2)
        open('index.html', 'w', encoding='utf-8').write(content)
        print('Fixed with LF!')
    else:
        print('ERROR: Pattern not found in either CRLF or LF form')
