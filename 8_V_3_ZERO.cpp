/*Autor:
 23-02-2023, Paulo Godinho */
/*Intro	----------------------------------------------------------------------------------
 Programa para demonstrar o funcionamento b†sico da linguagem C
 Comandos de I/O, printf, scanf
 Comando IF, ELSE IF, ELSE */
/*While-----------------------------------------------------------------------------------
 WHILE - Enquanto
*/
/*S°mbolos l¢gicos------------------------------------------------------------------------
 < => menor
 > => maior
 == => igual
 >= => maior ou igual
 <= => menor ou igual
 != => diferente
 */
/*Operadores l¢gicos----------------------------------------------------------------------
 && => E, ê verdadeiro qundo sÉo todos verdadeiros
 || => OU, ê falso quando sÉo todos falsos

 */
/*Exerc°cios------------------------------------------------------------------------------

 Exerc°cio I:
 Pedir um n£mero inteiro positivo ao utilizador e dizer se o mesmo Ç par ou °mpar.
 Caso o utilizador introduzir um n£mero negativo, repetimos a pergunta.

Exerc°cio II:
Pedir um n£mero inteiro positivo ao utilizador que se situe entre 0 e 20, inclusive.
Caso o utilizador introduzir um n£mero fora do intervalo, repetimos a pergunta.
 -------------------------------------------------------------------------------------*/

#include <stdio.h> //Incluir biblioteca standard de entrada e sa°da, comandos como PRINTF ou SCANF
#include <stdlib.h>

main()
{
    int num; // Declaraá?o e definiá?o da VARIAVEL do Tipo Inteiro "num".
    system("cls");
    printf("=========================================================================\n");
    printf("= Programa para pedir um n£mero positivo e verificar se Ç par ou °mpar.=\n");
    printf("=========================================================================\n");
    printf("\nIntroduza um n£mero inteiro positivo: ");
    scanf("%d", &num);

    // Enquanto o teste l¢gico nÉo for verdadeiro o c¢digo Ç repetido, n?o passa do Ciclo WHILE.
    while (num < 0 || num > 20)
    {
        system("cls");
        printf("=========================================================================\n");
        printf("= Programa para pedir um n£mero positivo e verificar se Ç par ou °mpar.=\n");
        printf("=========================================================================\n");
        printf("\n");
        printf("\33[0;31m======================	 ATENÄèO   ======================================\033[0m\n");
        printf("  O programa encontrou um\033[0;33m ERRO\033[0m,verifique por favor se:			 \n");
        printf(" 		O n£mero %d; Ç:                                           ", num);
        printf(" \n			negativo, ou nÉo est† dentro do intervalo pretendido.");
        printf("\n==========================================================================\n");
        printf("\n\nIntroduza novamente um n£mero inteiro positivo: ");
        scanf("%d", &num);
    }

    system("cls");
    printf("=========================================================================\n");
    printf("= Programa para pedir um n£mero positivo e verificar se Ç par ou °mpar.=\n");
    printf("=========================================================================\n");

    if (num == 0)
    {
        printf("\n                  %d :Ç nulo! \n", num);
        printf("=========================================================================\n");
    }

    else if (num % 2 == 0)
    {
        printf("\n		    O n£mero %d; Ç par!\n\n\n\n", num);
        printf("=========================================================================\n");
    }

    else
    {
        printf("\n		    O n£mero %d; Ç °mpar!\n\n\n\n", num);
        printf("=========================================================================\n");
    }
}
