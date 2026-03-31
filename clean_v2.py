import sys
import re

def ultimate_scrub(path):
    print(f"Iniciando Scrubbing Definitivo: {path}")
    try:
        # Lê o arquivo em binário para lidar com caracteres estranhos
        with open(path, 'rb') as f:
            raw = f.read()

        # Tenta decodificar ignorando erros para isolar o conteúdo
        content = raw.decode('utf-8', errors='ignore')

        # Dicionário de Correção Final
        final_fixes = [
            ('Â˜…', '★'),
            ('mí­nima', 'mínima'),
            ('benefí­cios', 'benefícios'),
            ('í­', 'í'), 
            ('\\"', '"'),
            ('"\\', '"'),
            ('\r', ''), # Normaliza para LF
        ]

        for bad, good in final_fixes:
            content = content.replace(bad, good)

        # Remove caracteres de controle invisíveis (exceto \n e \t)
        content = "".join(ch for ch in content if ch == '\n' or ch == '\t' or ord(ch) >= 32)

        # Salva em UTF-8 puro
        with open(path, 'w', encoding='utf-8', newline='\n') as f:
            f.write(content)
            
        print("Scrubbing concluído com sucesso! ✅ Console zerado.")
    except Exception as e:
        print(f"Erro no scrubbing: {e}")

if __name__ == "__main__":
    ultimate_scrub('indexv2.html')
