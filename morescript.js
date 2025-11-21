localStorage.setItem('abort',`package piscine

func Abort(a, b, c, d, e int) int {
	table := []int{a, b, c, d, e}
	for i := 0; i < len(table); i++ {
		for j := 0; j < len(table)-1; j++ {
			if table[j] > table[j+1] {
				table[j], table[j+1] = table[j+1], table[j]
			}
		}
	}
	return table[2]
}`);

localStorage.setItem("activebits",`package piscine

func ActiveBits(n int) int {
	count := 0
	for n > 0 {
		if n%2 == 1 {
			count++
		}
		n /= 2
	}
	return count
}`)

localStorage.setItem("addfront",`package piscine

func AddFront(s string, slice []string) []string {
	result := make([]string, len(slice)+1)
	result[0] = s
	for i, v := range slice {
		result[i+1] = v
	}
	return result
}`);

localStorage.setItem("addifpositive",`package piscine

func AddIfPositive(a, b int) int {
	if a > 0 && b > 0 {
		return a + b
	}
	return 0
}`);

localStorage.setItem("addprimesum",`package main

import (
	"os"
)

func main() {
	if len(os.Args) != 2 {
		os.Stdout.WriteString("0\n")
		return
	}

	nb := 0
	for _, c := range os.Args[1] {
		if c < '0' || c > '9' {
			os.Stdout.WriteString("0\n")
			return
		}
		nb = nb*10 + int(c-'0')
	}

	if nb <= 0 {
		os.Stdout.WriteString("0\n")
		return
	}

	sum := 0
	for i := 2; i <= nb; i++ {
		if isPrime(i) {
			sum += i
		}
	}
	printNbr(sum)
	os.Stdout.WriteString("\n")
}

func isPrime(n int) bool {
	if n <= 1 {
		return false
	}
	for i := 2; i*i <= n; i++ {
		if n%i == 0 {
			return false
		}
	}
	return true
}

func printNbr(n int) {
	if n == 0 {
		os.Stdout.WriteString("0")
		return
	}
	if n >= 10 {
		printNbr(n / 10)
	}
	c := byte(n%10 + '0')
	os.Stdout.Write([]byte{c})
}`);

localStorage.setItem("advancedsortwordarr",`package piscine

func AdvancedSortWordArr(a []string, f func(a, b string) int) {
	for i := 0; i < len(a); i++ {
		for j := 0; j < len(a)-1; j++ {
			if f(a[j], a[j+1]) > 0 {
				a[j], a[j+1] = a[j+1], a[j]
			}
		}
	}
}`);

localStorage.setItem("alphacount",`package piscine

func AlphaCount(s string) int {
	count := 0
	for _, r := range s {
		if (r >= 'a' && r <= 'z') || (r >= 'A' && r <= 'Z') {
			count++
		}
	}
	return count
}`);

localStorage.setItem("alphamirror",`package main

import (
	"os"
)

func main() {
	if len(os.Args) != 2 {
		os.Stdout.WriteString("\n")
		return
	}

	for _, r := range os.Args[1] {
		if r >= 'a' && r <= 'z' {
			r = 'z' - (r - 'a')
		} else if r >= 'A' && r <= 'Z' {
			r = 'Z' - (r - 'A')
		}
		os.Stdout.WriteString(string(r))
	}
	os.Stdout.WriteString("\n")
}`);

localStorage.setItem("alphaposition",`package piscine

func AlphaPosition(c rune) int {
	if c >= 'a' && c <= 'z' {
		return int(c - 'a' + 1)
	}
	if c >= 'A' && c <= 'Z' {
		return int(c - 'A' + 1)
	}
	return -1
}`);

localStorage.setItem("any",`package piscine

func Any(f func(string) bool, a []string) bool {
	for _, s := range a {
		if f(s) {
			return true
		}
	}
	return false
}`);

localStorage.setItem("appendrange",`package piscine

func AppendRange(min, max int) []int {
	if min >= max {
		return nil
	}
	var result []int
	for i := min; i < max; i++ {
		result = append(result, i)
	}
	return result
}`);

localStorage.setItem("addprimesum",`package main

import (
	"fmt"
	"os"
	"strconv"

	"github.com/01-edu/go-tests/lib/is"
)

func main() {
	if len(os.Args) != 2 {
		fmt.Println("0")
	} else {
		argument, _ := strconv.Atoi(os.Args[1])

		if argument < 0 {
			fmt.Println("0")
		} else {
			result := 0
			for ; argument >= 0; argument-- {
				if is.Prime(argument) {
					result += argument
				}
			}
			fmt.Println(result)
		}
	}
}`);

localStorage.setItem("alphamirror",`package main

import (
	"fmt"
	"os"
)

func main() {
	if len(os.Args) == 2 {
		arg := []rune(os.Args[1])
		for i, ch := range arg {
			if ch >= 'a' && ch <= 'z' {
				arg[i] = 'z' - ch + 'a'
			} else if ch >= 'A' && ch <= 'Z' {
				arg[i] = 'Z' - ch + 'A'
			}
		}
		fmt.Print(string(arg))
	}

	fmt.Println()
}`);

localStorage.setItem("argrot1",`package main

import (
	"fmt"
	"os"
)

func main() {
	if len(os.Args) < 3 {
		fmt.Println()
		return
	}
	for i := 1; i < len(os.Args); i++ {
		if i != len(os.Args)-1 {
			fmt.Print(os.Args[i+1])
			fmt.Print(" ")
		} else {
			fmt.Print(os.Args[1])
		}
	}
	fmt.Println()
}`);
localStorage.setItem("argrotn",`package main

import "fmt"
import "os"
import "strconv"

func main() {
	if len(os.Args) < 3 {
		fmt.Println("")
		return
	}

	args := os.Args[2:]

	n, err := strconv.Atoi(os.Args[1])
	if err != nil || n < 0 {
		fmt.Println("Error")
		return
	}

	for i := 0; i < len(args); i++ {
		fmt.Print(string(args[(i+n)%len(args)]))
		if i < len(args)-1 {
			fmt.Print(" ")
		}
	}
}`);
localStorage.setItem("argsort",`package main

import (
	"os"

	"github.com/01-edu/z01"
)

func main() {
	argument := os.Args[1:]
	if len(argument) == 1 && len(argument[0]) >= 1 {
		for i := 0; i < len(argument[0]); i++ {
			j := i + 1
			if j < len(argument[0]) {
				if argument[0][i] > argument[0][j] {
					z01.PrintRune('F')
					z01.PrintRune('\n')
					return
				}
			}
		}
		z01.PrintRune('T')
		z01.PrintRune('\n')
	}
}`);
localStorage.setItem("balancedstring",`package main

import (
	"fmt"
	"os"
)

func solve(s string) int {
	var count, countC, countD int
	for _, r := range s {
		if r == 'C' {
			countC++
		} else if r == 'D' {
			countD++
		}
		if countC == countD {
			count++
			countC = 0
			countD = 0
		}
	}
	return count
}

func main() {
	args := os.Args[1:]
	if len(args) == 1 {
		result := solve(args[0])
		fmt.Println(result)
	}
}`);

localStorage.setItem("boolean",`package main

import (
	"fmt"
	"os"
)

func main() {
	if len(os.Args[1:])%2 == 0 {
		fmt.Println("I have an even number of arguments")
	} else {
		fmt.Println("I have an odd number of arguments")
	}
}`);
localStorage.setItem("canyoucount",`package main

import (
	"fmt"
	"os"
)

func main() {
	if len(os.Args) < 2 {
		fmt.Println(0)
		return
	}
	count := 0
	for _, arg := range os.Args[1:] {
		count += len(arg)
	}
	fmt.Println(count)
}`);

localStorage.setItem("cat",`package main

import (
	"io"
	"io/ioutil"
	"os"

	"github.com/01-edu/go-tests/lib/challenge"
)

func main() {
	if len(os.Args) == 1 {
		if _, err := io.Copy(os.Stdout, os.Stdin); err != nil {
			panic(err)
		}
	} else {
		for _, arg := range os.Args[1:] {
			b, err := ioutil.ReadFile(arg)
			if err != nil {
				challenge.Fatalln("ERROR:", err)
			}
			os.Stdout.Write(b)
		}
	}
}`);
localStorage.setItem("cleanstr",`package main

import (
	"fmt"
	"os"
	"regexp"
	"strings"
)

func main() {
	if len(os.Args) == 2 {
		re := regexp.MustCompile(`( 'type plus here,javascript rejected it')`)
		fmt.Print(re.ReplaceAllString(strings.Trim(os.Args[1], " "), " "))
	}
	fmt.Println()
}`);
localStorage.setItem("comcheck",`package main

import (
	"fmt"
	"os"
)

func main() {
	safeWords := []string{"01", "galaxy", "galaxy 01"}
	count := 0
	for _, arg := range os.Args[1:] {
		for _, s := range safeWords {
			if s == arg {
				count++
			}
		}
	}
	if count == 1 || count == 2 {
		fmt.Println("Alert!!!")
	}
}
`);
localStorage.setItem("concat2args",`package main

import (
	"github.com/01-edu/z01"
	"os"
)

func main() {
	args := os.Args[1:]
	if len(args) != 2 {
		z01.PrintRune('\n')
		return
	}
	str := ""
	for i := 0; i < len(args); i++ {
		for _, v := range args[i] {
			str += string(v)
		}
	}
	if len(str) > 0 {
		for _, v := range str {
			z01.PrintRune(v)
		}
	}
	z01.PrintRune('\n')
}`);

localStorage.setItem("concatenate",`package main

import (
	"fmt"
	"os"
)

func main() {
	if len(os.Args) < 2 {
		fmt.Println()
		return
	}
	result := ""
	for _, arg := range os.Args[1:] {
		result += arg
	}
	fmt.Println(result)
}`);


localStorage.setItem("countdown",`package main

import "fmt"

func main() {
	fmt.Println(9876543210)
}`);
localStorage.setItem("displaya",`package main

import "fmt"

func main() {
	fmt.Println("a")
}`);
localStorage.setItem("displayalpham",`package main

import "fmt"

func main() {
	fmt.Println("aBcDeFgHiJkLmNoPqRsTuVwXyZ")
}`);
localStorage.setItem("displayalrevm",`package main

import "fmt"

func main() {
	fmt.Println("zYxWvUtSrQpOnMlKjIhGfEdCbA")
}`);
localStorage.setItem("displayfile",`package main

import (
	"fmt"
	"io/ioutil"
	"os"
)

func main() {
	if len(os.Args) < 2 {
		fmt.Println("File name missing")
	} else if len(os.Args) > 2 {
		fmt.Println("Too many arguments")
	} else {
		b, err := ioutil.ReadFile(os.Args[1])
		if err != nil {
			panic(err)
		}
		os.Stdout.Write(b)
	}
}`);
localStorage.setItem("displayfirstparam",`package main

import (
	"fmt"
	"os"
)

func main() {
	if len(os.Args) > 1 {
		fmt.Println(os.Args[1])
	}
}`);
localStorage.setItem("displaylastparam",`package main

import (
	"fmt"
	"os"
)

func main() {
	size := len(os.Args)
	if size > 1 {
		fmt.Println(os.Args[size-1])
	}
}`);
localStorage.setItem("displayp",`package main

import "github.com/01-edu/z01"

func main() {
	z01.PrintRune('P')
	z01.PrintRune('\n')
}`);
localStorage.setItem("displays",`package main

import "fmt"

func main() {
	fmt.Println("S")
}`);
localStorage.setItem("displayz",`package main

import "fmt"

func main() {
	fmt.Println("z")
}`);

localStorage.setItem("doop",`package main

import (
	"fmt"
	"os"
	"strconv"
)

func main() {
	if len(os.Args) == 4 {
		a, err := strconv.Atoi(os.Args[1])
		if err != nil {
			return
		}
		b, err := strconv.Atoi(os.Args[3])
		if err != nil {
			return
		}
		operator := os.Args[2]
		switch operator {
		case "+":
			result := a + b
			if (result > a) == (b > 0) {
				fmt.Println(result)
			}
		case "-":
			result := a - b
			if (result < a) == (b > 0) {
				fmt.Println(result)
			}
		case "*":
			result := a * b
			if a == 0 || (result/a == b) {
				fmt.Println(result)
			}
		case "/":
			if b == 0 {
				fmt.Println("No division by 0")
			} else {
				fmt.Println(a / b)
			}
		case "%":
			if b == 0 {
				fmt.Println("No modulo by 0")
			} else {
				fmt.Println(a % b)
			}
		}
	}
}`);
localStorage.setItem("expandstr",`package main

import (
	"fmt"
	"os"
	"strings"
)

func deleteExtraSpaces(a []string) (res []string) {
	for _, v := range a {
		if v != "" {
			res = append(res, v)
		}
	}
	return
}

func main() {
	if len(os.Args) == 2 {
		arg := strings.Split(os.Args[1], " ")
		arg = deleteExtraSpaces(arg)
		fmt.Println(strings.Join(arg, "   "))
	}
}`);

localStorage.setItem("findpairs",`package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

func findPairs(arr []int, targetSum int) [][]int {
	var pairs [][]int
	for i := 0; i < len(arr); i++ {
		for j := i + 1; j < len(arr); j++ {
			if arr[i]+arr[j] == targetSum {
				pairs = append(pairs, []int{i, j})
			}
		}
	}
	return pairs
}

func isValidArrayFormat(s string) bool {
	s = strings.TrimSpace(s)
	if len(s) < 2 || s[0] != '[' || s[len(s)-1] != ']' {
		return false
	}
	return true
}

func main() {
	if len(os.Args) != 3 {
		fmt.Println("Invalid input.")
		return
	}

	arrayStr := os.Args[1]
	targetStr := os.Args[2]

	if !isValidArrayFormat(arrayStr) {
		fmt.Println("Invalid input.")
		return
	}

	arrayStr = strings.Trim(arrayStr, "[]")
	strNums := strings.Split(arrayStr, ",")
	var arr []int
	for _, strNum := range strNums {
		s := strings.TrimSpace(strNum)
		num, err := strconv.Atoi(s)
		if err != nil {
			fmt.Printf("Invalid number: %s\n", s)
			return
		}
		arr = append(arr, num)
	}

	targetSum, err := strconv.Atoi(targetStr)
	if err != nil {
		fmt.Println("Invalid target sum.")
		return
	}

	pairs := findPairs(arr, targetSum)
	if len(pairs) > 0 {
		fmt.Printf("Pairs with sum %d: %v\n", targetSum, pairs)
	} else {
		fmt.Println("No pairs found.")
	}
}`);
localStorage.setItem("fixthemain",`package main

import "fmt"

const (
	CLOSE = iota
	OPEN
)

type Door struct {
	State int
}

func CloseDoor(ptrDoor *Door) {
	fmt.Println("Door Closing...")
	ptrDoor.State = CLOSE
}

func OpenDoor(ptrdoor *Door) {
	fmt.Println("Door Opening...")
	ptrdoor.State = OPEN
}

func IsDoorOpened(ptrDoor *Door) bool {
	fmt.Println("is the Door opened ?")
	return ptrDoor.State == OPEN
}

func IsDoorClosed(ptrDoor *Door) bool {
	fmt.Println("is the Door closed ?")
	return ptrDoor.State == CLOSE
}

func main() {
	var door Door

	OpenDoor(&door)
	if IsDoorClosed(&door) {
		OpenDoor(&door)
	}
	if IsDoorOpened(&door) {
		CloseDoor(&door)
	}
	if door.State == OPEN {
		CloseDoor(&door)
	}
}`);
localStorage.setItem("flags",`package main

import (
	"fmt"
	"os"
	"sort"
	"strings"
)

type helpMs struct {
	flag        string
	shortenFlag string
	handler     string
}

func obtainValues(value, strsplit string) string {
	values := strings.Split(value, "=")
	return values[len(values)-1]
}

func setMs(flag, shortenFlag, handler string) *helpMs {
	helpMs := &helpMs{
		flag:        flag,
		shortenFlag: shortenFlag,
		handler:     handler,
	}
	return helpMs
}

func main() {
	size := len(os.Args)

	if size == 1 || os.Args[1] == "-h" || os.Args[1] == "--help" {
		table := []helpMs{}

		helpMs := setMs("--insert", "-i", "This flag inserts the string into the string passed as argument.")
		table = append(table, *helpMs)
		helpMs = setMs("--order", "-o", "This flag will behave like a boolean, if it is called it will order the argument.")
		table = append(table, *helpMs)

		for _, v := range table {
			fmt.Println(v.flag)
			fmt.Println(" ", v.shortenFlag)
			fmt.Println("	", v.handler)
		}
	} else if size <= 4 {
		var runes []rune
		strToInsert := ""
		var order bool

		for i := 1; i < size; i++ {
			if strings.Contains(os.Args[i], "--insert") || strings.Contains(os.Args[i], "-i") {
				strToInsert = obtainValues(os.Args[i], "=")
			} else if strings.Contains(os.Args[i], "--order") || strings.Contains(os.Args[i], "-o") {
				order = true
			} else {
				runes = []rune(os.Args[i])
			}
		}
		if strToInsert != "" {
			concatStr := string(runes) + strToInsert
			runes = []rune(concatStr)
		}
		if order {
			sort.Slice(runes, func(i, j int) bool {
				return runes[i] < runes[j]
			})
		}

		fmt.Println(string(runes))
	}
}`);
localStorage.setItem("fprime",`package main

import (
	"fmt"
	"os"
	"strconv"
)

func fprime(value int) {
	if value == 1 {
		return
	}
	divisionIterator := 2
	for value > 1 {
		if value%divisionIterator == 0 {
			fmt.Print(divisionIterator)
			value = value / divisionIterator

			if value > 1 {
				fmt.Print("*")
			}
			divisionIterator--
		}
		divisionIterator++
	}
	fmt.Println()
}

func main() {
	if len(os.Args) == 2 {
		if i, err := strconv.Atoi(os.Args[1]); err == nil {
			fprime(i)
		}
	}
}`);
localStorage.setItem("frontback",`package main

import (
	"os"

	"github.com/01-edu/z01"
)

func main() {
	if len(os.Args) == 2 && len(os.Args[1]) == 1 {
		char := os.Args[1][0]
		if (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') {
			if char == 'z' || char == 'Z' {
				z01.PrintRune(rune(char) - 1)
				z01.PrintRune(rune(char))
			} else if char == 'a' || char == 'A' {
				z01.PrintRune(rune(char))
				z01.PrintRune(rune(char) + 1)
			} else {
				z01.PrintRune(rune(rune(char)) - 1)
				z01.PrintRune(rune(char))
				z01.PrintRune(rune(char) + 1)
			}
		}
	}
	z01.PrintRune('\n')
}`);

localStorage.setItem("getalpha",`package main

import (
	"os"
	"strconv"

	"github.com/01-edu/z01"
)

func main() {
	if len(os.Args) == 2 {
		i, err := strconv.Atoi(os.Args[1])
		if err == nil && i >= 0 && i <= 127 {
			z01.PrintRune(rune(i))
		}
		z01.PrintRune('\n')
	} else {
		z01.PrintRune('\n')
	}
}`);

localStorage.setItem("getarea",`package main

import (
	"fmt"
	"os"
	"strconv"
)

func main() {
	args := os.Args
	if len(args) != 2 {
		fmt.Println()
		return
	}
	area, err := strconv.Atoi(args[1])
	if err != nil || area < 0 {
		fmt.Println("Error")
		return
	}
	var result int = int(float32(area*area) * float32(3.14))
	fmt.Println(result)
}`);

localStorage.setItem("getascii",`package main

import (
	"fmt"
	"os"
)

func main() {
	if len(os.Args) == 2 && len(os.Args[1]) == 1 && int(os.Args[1][0]) >= 0 && int(os.Args[1][0]) <= 127 {
		fmt.Println(int(os.Args[1][0]))
	}
	fmt.Print("\n")
}`);
localStorage.setItem("grouping",`package main

import (
	"fmt"
	"os"
	"strings"
	"unicode"
)

func singleSearch(exp []string, text string) []string {
	items := strings.Split(text, " ")
	var result []string

	for _, item := range items {
		for _, word := range exp {
			if strings.Contains(item, word) {
				result = append(result, item)
			}
		}
	}
	return result
}

func simpleSearch(runes []rune, text string) []string {
	exp := string(runes)

	var result []string
	if !strings.ContainsRune(exp, '|') {
		helper := []string{exp}
		result = append(singleSearch(helper, text))
	} else {
		expWords := strings.Split(exp, "|")
		result = append(result, singleSearch(expWords, text)...)
	}
	return result
}

func brackets(regexp, text string) {
	if text == "" || regexp == "" {
		return
	}
	runes := []rune(regexp)

	if runes[0] == '(' && runes[len(runes)-1] == ')' {
		runes = runes[1 : len(runes)-1]
		result := simpleSearch(runes, text)
		for i, s := range result {
			if !unicode.IsLetter(rune(s[len(s)-1])) {
				s = s[0 : len(s)-1]
			}
			fmt.Printf("%d: %s\n", i+1, s)
		}
	}
}

func main() {
	if len(os.Args) == 3 {
		brackets(os.Args[1], os.Args[2])
	}
}`);
localStorage.setItem("hello",`package main

import "fmt"

func main() {
	fmt.Println("Hello World!")
}`);
localStorage.setItem("inter",`package main

import (
	"fmt"
	"os"
	"strings"
)

func result(s1 string, s2 string) string {
	var rest []rune
	for _, a := range s1 {
		for _, b := range s2 {
			if a == b && !strings.ContainsRune(string(rest), a) {
				rest = append(rest, a)
			}
		}
	}
	return string(rest)
}

func main() {
	if len(os.Args) == 3 {
		fmt.Println(result(os.Args[1], os.Args[2]))
	}
}`);
localStorage.setItem("ispowerof2",`package main

import (
	"fmt"
	"os"
	"strconv"
)

// computes the logical bitwise AND of its operands.
func isPowerOf2(n int) bool {
	return n != 0 && ((n & (n - 1)) == 0)
}

func main() {
	if len(os.Args) == 2 {
		nbr, _ := strconv.Atoi(os.Args[1])
		fmt.Println(isPowerOf2(nbr))
	}
}`);
localStorage.setItem("nbrconvertalpha",`package main

import (
	"fmt"
	"os"
	"strconv"
)

func main() {
	args := os.Args[1:]
	if len(args) == 0 {
		return
	}
	var upper bool
	if args[0] == "--upper" {
		upper = true
		args = args[1:]
	}
	for _, arg := range args {
		if nb, err := strconv.Atoi(arg); err != nil || nb < 1 || nb > 26 {
			fmt.Print(" ")
		} else {
			if upper {
				nb += 'A' - 1
			} else {
				nb += 'a' - 1
			}
			fmt.Printf("%c", rune(nb))
		}
	}
	fmt.Println()
}`);
localStorage.setItem("options",`package main

import (
	"fmt"
	"os"
	"unicode"
)

func main() {
	if len(os.Args) < 2 {
		fmt.Println("options: abcdefghijklmnopqrstuvwxyz")
		return
	}

	var options [32]bool
	for _, v := range os.Args {
		if len(v) < 2 {
			fmt.Println("Invalid Option")
			return
		}
		if v[0] == '-' {
			if v[1] == 'h' {
				fmt.Println("options: abcdefghijklmnopqrstuvwxyz")
				return
			}
			// fill options
			for _, r := range v[1:] {
				if !unicode.Is(unicode.Latin, r) {
					fmt.Println("Invalid Option")
					return
				}
				options['z'-r+6] = true
			}
		}
	}
	for i, v := range options {
		if i%8 == 0 && i != 0 {
			fmt.Print(" ")
		}
		if v {
			fmt.Print(1)
		} else {
			fmt.Print(0)
		}
	}
	fmt.Println()
}`);
localStorage.setItem("paramount",`package main

import (
	"fmt"
	"os"
)

func main() {
	fmt.Println(len(os.Args) - 1)
}`);
localStorage.setItem("paramrange",`package main

import "fmt"
import "strconv"
import "os"

func main() {
	if len(os.Args) < 3 {
		fmt.Println()
		return
	}
	i, err := strconv.Atoi(os.Args[1])
	if err != nil {
		fmt.Println("Error")
		return
	}
	var max int = i
	var min int = i
	for _, arg := range os.Args[1:] {
		i, err := strconv.Atoi(arg)
		if err != nil {
			fmt.Println("Error")
			return
		}
		if i > max {
			max = i
		}
		if i < min {
			min = i
		}
	}
	fmt.Println(min, max)
}`);
localStorage.setItem("piglatin",`package main

import (
	"fmt"
	"os"
	"strings"
)

func main() {
	if len(os.Args) != 2 || os.Args[1] == "" {
		return
	}
	s := os.Args[1]
	vowel := strings.IndexAny(s, "aeiouAEIOU")
	if vowel == -1 {
		fmt.Println("No vowels")
	} else {
		fmt.Println(string(s[vowel:]) + string(s[:vowel]) + "ay")
	}
}`);
localStorage.setItem("pilot",`package main

import "fmt"

type Pilot struct {
	Name     string
	Life     float32
	Age      int
	Aircraft int
}

const Aircraft1 = 1

func main() {
	donnie := Pilot{
		Name:     "Donnie",
		Life:     100.0,
		Age:      24,
		Aircraft: Aircraft1,
	}
	fmt.Println(donnie)
}`);

localStorage.setItem("pingpong",`package main

import (
	"fmt"
	"os"
	"strconv"
)

func main() {
	if len(os.Args) != 2 {
		return
	}
	num, err := strconv.Atoi(os.Args[1])
	if err != nil {
		fmt.Println(err.Error())
		return
	}

	for i := 0; i < num; i++ {
		if i%2 == 0 {
			fmt.Println(strconv.Itoa(i) + " ping")
			continue
		}
		fmt.Println(strconv.Itoa(i) + " pong")
	}
}`);
localStorage.setItem("point",`package main

import "fmt"

type point struct {
	x int
	y int
}

func setPoint(ptr *point) {
	ptr.x = 42
	ptr.y = 21
}

func main() {
	points := &point{}

	setPoint(points)

	fmt.Printf("x = %d, y = %d", points.x, points.y)
	fmt.Println()
}`);
localStorage.setItem("printalphabet",`package main

import "fmt"

func main() {
	fmt.Println("abcdefghijklmnopqrstuvwxyz")
}`);
localStorage.setItem("printalphabetalt",`package main

import "fmt"

func main() {
	fmt.Println("aBcDeFgHiJkLmNoPqRsTuVwXyZ")
	fmt.Println("zYxWvUtSrQpOnMlKjIhGfEdCbA")
}`);
localStorage.setItem("printalphabetalt2",`package main

import "fmt"

func main() {
	fmt.Println("AbCdEfGhIjKlMnOpQrStUvWxYz")
	fmt.Println("ZyXwVuTsRqPoNmLkJiHgFeDcBa")
}`);
localStorage.setItem("printalphabetg",`package main

import "fmt"

func main() {
	fmt.Println("abcdefg")
}`);
localStorage.setItem("printalt",`package main

import "fmt"

func main() {
	fmt.Println("azbycxdwevfugthsirjqkplomn")
}`);
localStorage.setItem("printalt2",`package main

import "fmt"

func main() {
	fmt.Println("zaybxcwdveuftgshriqjpkolnm")
}`);
localStorage.setItem("printaltu",`package main

import "fmt"

func main() {
	fmt.Println("AZBYCXDWEVFUGTHSIRJQKPLOMN")
}`);
localStorage.setItem("printalt2",`package main

import "fmt"

func main() {
	fmt.Println("ZAYBXCWDVEUFTGSHRIQJPKOLNM")
}`);
localStorage.setItem("printascii",`package main

import "fmt"
import "os"

func main() {
	args := os.Args
	if len(args) != 2 || len(args[1]) != 1 {
		return
	}
	ascii := int(args[1][0])
	if ascii >= 65 && ascii <= 90 || ascii >= 97 && ascii <= 122 {
		fmt.Println(ascii)
		return
	}
}`);
localStorage.setItem("printbit",`package main

import (
	"fmt"
	"os"
	"strconv"
)

func main() {
	if len(os.Args) == 2 {
		nbr, _ := strconv.Atoi(os.Args[1])
		printBits(byte(nbr))
	}
}

func printBits(octe byte) {
	fmt.Printf("%08b", octe)
}`);
localStorage.setItem("printdigits",`package main

import "fmt"

func main() {
	fmt.Println("0123456789")
}`);
localStorage.setItem("printevenarguments",`package main

import (
	"fmt"
	"os"
)

func main() {
	if len(os.Args) <= 2 {
		fmt.Println()
		return
	}
	for i, arg := range os.Args[1:] {
		if i%2 != 0 {
			fmt.Println(arg)
		}
	}
}`);

localStorage.setItem("printhex",`package main

import (
	"fmt"
	"os"
	"strconv"
)

func main() {
	if len(os.Args) == 2 {
		if i, err := strconv.Atoi(os.Args[1]); err == nil && i >= 0 {
			fmt.Printf("%x\n", i)
		} else {
			fmt.Println("ERROR")
		}
	}
}`);

localStorage.setItem("printmiddle",`package main

import (
	"fmt"
	"os"
)

func main() {
	if len(os.Args) < 2 {
		fmt.Println()
		return
	}
	args := os.Args[1:]

	if len(args)%2 == 0 {
		fmt.Println(args[len(args)/2-1] + " " + args[len(args)/2])
	} else {
		fmt.Println(args[len(args)/2])
	}
}`);

localStorage.setItem("printparams",`package main

import (
	"fmt"
	"os"
)

func main() {
	for _, a := range os.Args[1:] {
		fmt.Println(a)
	}
`);

localStorage.setItem("printevcomb",`package main

import "fmt"

func main() {
	for a := 9; a >= 2; a-- {
		for b := a - 1; b >= 1; b-- {
			for c := b - 1; c >= 0; c-- {
				fmt.Printf("%d%d%d", a, b, c)
				if a+b+c != 3 {
					fmt.Print(", ")
				}
			}
		}
	}
	fmt.Println()
}`);

localStorage.setItem("printreversealphabet",`package main

import "fmt"

func main() {
	fmt.Println("zyxwvutsrqponmlkjihgfedcba")
}`);

localStorage.setItem("printreversealphabetalt",`package main

import "fmt"

func main() {
	fmt.Println("zYxWvUtSrQpOnMlKjIhGfEdCbA")
	fmt.Println("aBcDeFgHiJkLmNoPqRsTuVwXyZ")
}`);
localStorage.setItem("printreversealphabetalt2",`package main

import "fmt"

func main() {
	fmt.Println("ZyXwVuTsRqPoNmLkJiHgFeDcBa")
	fmt.Println("AbCdEfGhIjKlMnOpQrStUvWxYz")
}`);
localStorage.setItem("printreversealphabetg",`package main

import "fmt"

func main() {
	fmt.Println("gfedcba")
}`);
localStorage.setItem("printrot",`package main

import (
	"fmt"
	"os"
)

func printAnswer(letter rune) {
	answer := []rune{}
	for i := letter; i <= 'z'; i++ {
		answer = append(answer, i)
	}
	for j := 'a'; j < letter; j++ {
		answer = append(answer, j)
	}
	fmt.Println(string(answer))
}

func main() {
	if len(os.Args) == 2 {
		letter := os.Args[1]
		if len(letter) == 1 {
			letterConverted := []rune(letter)
			if letterConverted[0] >= 'a' && letterConverted[0] <= 'z' {
				printAnswer(letterConverted[0])
			}
		} else {
			fmt.Println()
		}
	} else {
		fmt.Println()
	}
}`);
localStorage.setItem("range",`package main

import (
	"fmt"
	"os"
	"strconv"
)

func main() {
	if len(os.Args) != 3 {
		return
	}
	a, err := strconv.Atoi(os.Args[1])
	if err != nil {
		fmt.Println(err)
		return
	}
	b, err := strconv.Atoi(os.Args[2])
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Print(a)
	for b != a {
		if a < b {
			a++
		} else {
			a--
		}
		fmt.Print(" ", a)
	}
	fmt.Println()
}`);
localStorage.setItem("rectangle",`package main

import "fmt"

type point struct {
	x int
	y int
}

type rectangle struct {
	upLeft    point
	downRight point
}

func defineRectangle(vPoint []point, n int) *rectangle {
	xmin := vPoint[0].x
	xmax := vPoint[0].x
	ymin := vPoint[0].y
	ymax := vPoint[0].y

	ptr := &rectangle{}

	for i := 0; i < n; i++ {
		if vPoint[i].x < xmin {
			xmin = vPoint[i].x
		}
		if vPoint[i].x > xmax {
			xmax = vPoint[i].x
		}
		if vPoint[i].y < ymin {
			ymin = vPoint[i].y
		}
		if vPoint[i].y > ymax {
			ymax = vPoint[i].y
		}
	}
	ptr.upLeft.x = xmin
	ptr.upLeft.y = ymax
	ptr.downRight.x = xmax
	ptr.downRight.y = ymin

	return ptr
}

func calcArea(ptr *rectangle) int {
	return (ptr.upLeft.x - ptr.downRight.x) * (ptr.downRight.y - ptr.upLeft.y)
}

func main() {
	vPoint := []point{}
	rectangle := &rectangle{}
	n := 7

	for i := 0; i < n; i++ {
		val := point{
			x: i%2 + 1,
			y: i + 2,
		}
		vPoint = append(vPoint, val)
	}

	rectangle = defineRectangle(vPoint, n)
	fmt.Println("area of the rectangle:", calcArea(rectangle))
}`);

localStorage.setItem("replaceeven",`package main

import (
	"fmt"
	"os"

	"github.com/01-edu/z01"
)

func main() {
	for argsIndex, arg := range os.Args[1:] {
		for i := 0; i < len(arg); i++ {
			if i%2 == 0 {
				z01.PrintRune('2')
			} else {
				z01.PrintRune(rune(arg[i]))
			}
		}
		if argsIndex < len(os.Args[1:])-1 {
			fmt.Print(" ")
		}
	}
	fmt.Println()
}`);

localStorage.setItem("returna",`package main

import (
	"fmt"
	"os"
)

func main() {
	length := len(os.Args)
	counter := 0
	if length > 2 {
	} else {
		lenString := len(os.Args[1])
		for i := 0; i < lenString; i++ {
			if os.Args[1][i] != 97 {
				if counter == lenString-1 {
					fmt.Print("!(Contains the letter)\n")
					break
				}
				counter++

			} else if os.Args[1][i] == 97 {
				fmt.Print("Contains the letter\n")
				break
			}
		}
	}
}`);
localStorage.setItem("revargs",`package main

import (
	"fmt"
	"os"
)

func main() {
	if len(os.Args) < 2 {
		fmt.Println()
		return
	}
	for i := len(os.Args) - 1; i >= 1; i-- {
		fmt.Print(os.Args[i])
		if i != 1 {
			fmt.Print(" ")
		}
	}
	fmt.Println()
}`);

localStorage.setItem("reverserange",`package main

import (
	"fmt"
	"os"
	"strconv"
)

func main() {
	if len(os.Args) != 3 {
		return
	}
	a, err := strconv.Atoi(os.Args[1])
	if err != nil {
		fmt.Println(err)
		return
	}
	b, err := strconv.Atoi(os.Args[2])
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Print(b)
	for a != b {
		if b < a {
			b++
		} else {
			b--
		}
		fmt.Print(" ", b)
	}
	fmt.Println()
}`);

localStorage.setItem("reversestrcap",`package main

import (
	"fmt"
	"os"
	"unicode"
)

func main() {
	for _, arg := range os.Args[1:] {
		arg := []rune(arg)
		for j, r := range arg {
			if j+1 == len(arg) || arg[j+1] == ' ' {
				arg[j] = unicode.ToUpper(r)
			} else {
				arg[j] = unicode.ToLower(r)
			}
		}
		fmt.Println(string(arg))
	}
}`);
localStorage.setItem("revparams",`package main

import (
	"fmt"
	"os"
)

func main() {
	for i := len(os.Args) - 1; i >= 1; i-- {
		fmt.Println(os.Args[i])
	}
}`);

localStorage.setItem("revwstr",`package main

import (
	"fmt"
	"os"
	"strings"
)

func main() {
	if len(os.Args) == 2 {
		a := strings.Split(os.Args[1], " ")
		for i := len(a) - 1; i >= 0; i-- {
			fmt.Print(a[i])
			if i != 0 {
				fmt.Print(" ")
			}
		}
		fmt.Println()
	}
}`);

localStorage.setItem("romannumbers",`package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

type roman struct {
	num        int
	romanDigit string
}

func main() {
	if len(os.Args) == 2 {
		nbr, err := strconv.Atoi(os.Args[1])
		if err != nil || nbr >= 4000 || nbr == 0 {
			fmt.Println("ERROR: cannot convert to roman digit")
			return
		}
		patter := []roman{
			{num: 1000, romanDigit: "M"},
			{num: 900, romanDigit: "CM"},
			{num: 500, romanDigit: "D"},
			{num: 400, romanDigit: "CD"},
			{num: 100, romanDigit: "C"},
			{num: 90, romanDigit: "XC"},
			{num: 50, romanDigit: "L"},
			{num: 40, romanDigit: "XL"},
			{num: 10, romanDigit: "X"},
			{num: 9, romanDigit: "IX"},
			{num: 5, romanDigit: "V"},
			{num: 4, romanDigit: "IV"},
			{num: 1, romanDigit: "I"},
		}
		sumRoman, romandigit := print(nbr, patter)
		fmt.Println(strings.TrimSuffix(sumRoman, "+"))
		fmt.Println(romandigit)
	}
}

func print(nbr int, patter []roman) (string, string) {
	var sumRomanDigit, result string
	for _, v := range patter {
		for nbr >= v.num {
			sumRomanDigit += v.romanDigit + "+"
			result += v.romanDigit
			nbr -= v.num
		}
	}
	sumRomanDigit = formatsum(sumRomanDigit, patter)
	return sumRomanDigit, result
}

func formatsum(a string, patter []roman) string {
	result2 := strings.Split(a, "+")

	for i, v := range result2 {
		if len(v) == 2 {
			result2[i] = fmt.Sprintf("(%s-%s)", string(result2[i][1]), string(result2[i][0]))
		}
	}
	a = strings.Join(result2, "+")
	return a
}`);


localStorage.setItem("rostring",`package main

import (
	"fmt"
	"os"
	"strings"
)

func deleteExtraSpaces(a []string) []string {
	var res []string
	for _, v := range a {
		if v != "" {
			res = append(res, v)
		}
	}
	return res
}

func main() {
	if len(os.Args) == 2 {
		words := strings.Split(os.Args[1], " ")
		words = deleteExtraSpaces(words)
		if len(words) >= 1 {
			for _, v := range words[1:] {
				fmt.Print(v, " ")
			}
			fmt.Print(words[0])
		}
	}
	fmt.Println()
}`);
localStorage.setItem("rot13",`package main

import (
	"fmt"
	"os"
)

func main() {
	if len(os.Args) == 2 {
		for _, r := range os.Args[1] {
			if r >= 'a' && r <= 'z' {
				if r >= 'a'+13 {
					r -= 13
				} else {
					r += 13
				}
			} else if r >= 'A' && r <= 'Z' {
				if r >= 'A'+13 {
					r -= 13
				} else {
					r += 13
				}
			}
			fmt.Printf("%c", r)
		}
		fmt.Println()
	}
}`);

localStorage.setItem("rotatevowels",`package main

import (
	"os"

	"github.com/01-edu/z01"
)

func main() {
	var vowels []rune

	arguments := os.Args[1:]

	for _, i := range arguments {
		for j := 0; j < len(i); j++ {
			if IsVowel(i[j]) {
				vowels = append(vowels, rune(i[j]))
			}
		}
	}

	counter := len(vowels) - 1

	for s, i := range arguments {
		for j := 0; j < len(i); j++ {
			if IsVowel(i[j]) {
				z01.PrintRune(rune(vowels[counter]))
				counter--
			} else {
				z01.PrintRune(rune(i[j]))
			}
		}
		if s != len(arguments)-1 {
			z01.PrintRune(' ')
		}
	}
	z01.PrintRune('\n')
}

func IsVowel(s byte) bool {
	if s == 'A' || s == 'E' || s == 'I' || s == 'O' || s == 'U' || s == 'a' || s == 'e' || s == 'i' || s == 'o' || s == 'u' {
		return true
	}
	return false
}`);

localStorage.setItem("rpncalc",`package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

func deleteExtraSpaces(a []string) (res []string) {
	for _, v := range a {
		if v != "" {
			res = append(res, v)
		}
	}
	return
}

func main() {
	if len(os.Args) != 2 {
		fmt.Println("Error")
		return
	}
	var values []int
	op := strings.Split(os.Args[1], " ")
	op = deleteExtraSpaces(op)
	for _, v := range op {
		val, err := strconv.Atoi(v)

		if err == nil {
			values = append(values, val)
			continue
		}

		n := len(values)
		if n < 2 {
			fmt.Println("Error")
			return
		}

		switch v {
		case "+":
			values[n-2] += values[n-1]
			values = values[:n-1]
		case "-":
			values[n-2] -= values[n-1]
			values = values[:n-1]
		case "*":
			values[n-2] *= values[n-1]
			values = values[:n-1]
		case "/":
			values[n-2] /= values[n-1]
			values = values[:n-1]
		case "%":
			values[n-2] %= values[n-1]
			values = values[:n-1]
		default:
			fmt.Println("Error")
			return
		}
	}
	if len(values) == 1 {
		fmt.Println(values[0])
	} else {
		fmt.Println("Error")
	}
}`);

localStorage.setItem("samecase",`package main

import (
	"os"

	"github.com/01-edu/z01"
)

func main() {
	argument := os.Args[1:]
	if len(argument) == 2 && len(argument[0]) == 1 && len(argument[1]) == 1 {
		if ((argument[0][0] >= 'a' && argument[0][0] <= 'z') || (argument[0][0] >= 'A' && argument[0][0] <= 'Z')) &&
			(argument[1][0] >= 'a' && argument[1][0] <= 'z') || (argument[1][0] >= 'A' && argument[1][0] <= 'Z') {
			if (argument[0][0] >= 'A' && argument[0][0] <= 'Z') && (argument[1][0] >= 'A' && argument[1][0] <= 'Z') ||
				(argument[0][0] >= 'a' && argument[0][0] <= 'z') && (argument[1][0] >= 'a' && argument[1][0] <= 'z') {
				z01.PrintRune('1')
			} else {
				z01.PrintRune('0')
			}
		} else {
			z01.PrintRune('-')
			z01.PrintRune('1')
		}
	}
	z01.PrintRune('\n')
}`);
localStorage.setItem("searchreplace",`package main

import (
	"fmt"
	"os"
	"strings"
)

func main() {
	if len(os.Args) == 4 {
		fmt.Println(strings.Map(func(r rune) rune {
			if r == []rune(os.Args[2])[0] {
				return []rune(os.Args[3])[0]
			}
			return r
		}, os.Args[1]))
	}
}`);

localStorage.setItem("sortparams",`package main

import (
	"fmt"
	"os"
	"sort"
)

func main() {
	args := os.Args[1:]
	sort.Strings(args)
	for _, v := range args {
		fmt.Println(v)
	}
}`);

localStorage.setItem("sudoku",`package main

import (
	"fmt"
	"os"
)

// Prints in standard output the sudoku board
func printBoard(board [][]rune) {
	for _, row := range board {
		for i, e := range row {
			fmt.Printf("%c", e)
			if i != len(row)-1 {
				fmt.Print(" ")
			}
		}
		fmt.Println()
	}
}

// Return true if the value 'value' is in the row 'y' of the board 'board'
func isInRow(board [][]rune, value rune, x, y int) bool {
	for i, v := range board[y] {
		if i != x && v == value {
			return true
		}
	}
	return false
}

// Returns true if the value 'value' is in the column 'x' of the board 'board'
func isInColumn(board [][]rune, value rune, x, y int) bool {
	for i := 0; i < 9; i++ {
		if i != y && board[i][x] == value {
			return true
		}
	}
	return false
}

// Receives an int 'x' and returns the beginning and the end
// of the interval of consecutive pairs of multiples of three 'x' is in.
// Ex. for x = 2, x is in (0, 3)
// for x = 4, x is in (3, 6)
func intervalThree(x int, max int) (int, int) {
	var i int
	for i = 0; i < max; i += 3 {
		if x >= i && x < i+3 {
			break
		}
	}
	endi := 3 + i
	return i, endi
}

// Returns true if the value 'value' is allowed in the possition (x,y) of the board 'board'
func isAllowedInBox(board [][]rune, value rune, x, y int) bool {
	n := len(board)
	begi, endi := intervalThree(x, n)
	begj, endj := intervalThree(y, n)
	for j := begj; j < endj; j++ {
		for i := begi; i < endi; i++ {
			if (j != y || i != i) && board[j][i] == value {
				return false
			}
		}
	}
	return true
}

// Returns true if the value 'val' is allowed in the position (x, y) of the board
func isAllowed(board [][]rune, val rune, x, y int) bool {
	return !isInRow(board, val, x, y) &&
		!isInColumn(board, val, x, y) &&
		isAllowedInBox(board, val, x, y)
}

// Returns true if the position doesn't have any value defined
// That is, if the character is a dot '.'
func isEmpty(board [][]rune, x, y int) bool {
	return board[y][x] == '.'
}

// Returns all the empty positions in the board
func availablePos(board [][]rune) [][]int {
	var ava [][]int
	for y, row := range board {
		for x, e := range row {
			if e == '.' {
				ava = append(ava, []int{x, y})
			}
		}
	}
	return ava
}

func validBoard(board [][]rune) bool {
	size := 9
	if len(board) != size {
		return false
	}
	for y, row := range board {
		if len(row) != size {
			return false
		}
		for x, e := range row {
			if (e < '1' || e > '9') && e != '.' {
				return false
			}
			if e != '.' && !isAllowed(board, e, x, y) {
				return false
			}
		}
	}
	return true
}

// Returns true if the sudoku has a solution
func sudokuH(board [][]rune, available [][]int, i int) bool {
	n := len(available)

	if i >= n {
		return true
	}

	x := available[i][0]
	y := available[i][1]

	for c := '1'; c <= '9'; c++ {
		if isAllowed(board, c, x, y) {
			board[y][x] = c
			if sudokuH(board, available, i+1) {
				return true
			}
			board[y][x] = '.'
		}
	}
	return false
}

// Receives a board and fills the empty positions with the correct
// value
func solveSudoku(board [][]rune) {
	available := availablePos(board)
	if sudokuH(board, available, 0) {
		printBoard(board)
	} else {
		fmt.Println("Error")
	}
}

func main() {
	var board [][]rune

	for _, v := range os.Args[1:] {
		board = append(board, []rune(v))
	}

	if validBoard(board) {
		solveSudoku(board)
	} else {
		fmt.Println("Error")
	}
}`);

localStorage.setItem("sumascii",`package main

import (
	"fmt"
	"os"
)

func main() {
	if len(os.Args) != 2 {
		fmt.Println(0)
		return
	}
	var result byte
	for _, byte := range []byte(os.Args[1]) {
		result += byte
	}
	fmt.Println(result)
}`);

localStorage.setItem("sumthemall",`package main

import (
	"fmt"
	"os"
	"strconv"
)

const (
	MaxUint = ^uint(0)
	MinUint = 0
	MaxInt  = int(MaxUint >> 1)
	MinInt  = -MaxInt - 1
)

func main() {
	if len(os.Args) < 2 {
		fmt.Println(0)
		return
	}
	result := 0
	for _, arg := range os.Args[1:] {
		num, err := strconv.Atoi(arg)
		if num >= MaxInt || num <= MinInt || err != nil {
			fmt.Println(0)
			return
		}
		result += num
	}
	fmt.Println(result)
}`);

localStorage.setItem("swapargs",`package main

import (
	"fmt"
	"os"
)

func main() {
	if len(os.Args) != 3 {
		fmt.Println("")
		return
	}
	fmt.Println(os.Args[2] + " " + os.Args[1])
}`);
localStorage.setItem("switchcase",`package main

import (
	"fmt"
	"os"
	"unicode"
)

func main() {
	if len(os.Args) == 2 {
		runes := []rune(os.Args[1])
		for i, r := range runes {
			if unicode.IsLower(r) {
				runes[i] = unicode.ToUpper(r)
			} else if unicode.IsUpper(r) {
				runes[i] = unicode.ToLower(r)
			}
		}
		fmt.Println(string(runes))
	}
}`);
localStorage.setItem("",`package main

import (
	"fmt"
	"os"
	"strconv"
)

func tabmul(nbr int) {
	i := 1
	for i < 10 {
		result := nbr * i
		fmt.Println(i, "x", nbr, "=", result)
		i++
	}
}

func main() {
	if len(os.Args) == 2 {
		number, _ := strconv.Atoi(os.Args[1])
		tabmul(number)
	} else {
		fmt.Println()
	}
}`);
localStorage.setItem("tabmult",`package main

import (
	"fmt"
	"os"
	"strconv"
)

func tabmul(nbr int) {
	i := 1
	for i < 10 {
		result := nbr * i
		fmt.Println(i, "x", nbr, "=", result)
		i++
	}
}

func main() {
	if len(os.Args) == 2 {
		number, _ := strconv.Atoi(os.Args[1])
		tabmul(number)
	} else {
		fmt.Println()
	}
}`);
localStorage.setItem("ztail",`package main

import (
	"flag"
	"fmt"
	"os"
)

const (
	success = iota
	failure
)

var status = success

func notNil(err error) bool {
	if err != nil {
		status = failure
		fmt.Fprintln(os.Stderr, err)
		return true
	}
	return false
}

func main() {
	var bytes int64
	flag.Int64Var(&bytes, "c", 0, "output the last NUM bytes")
	flag.Parse()
	filenames := flag.Args()
	for i, filename := range filenames {
		file, err := os.Open(filename)
		if notNil(err) {
			continue
		}
		defer file.Close()
		fileInfo, err := file.Stat()
		if notNil(err) {
			continue
		}
		offset := fileInfo.Size() - bytes
		if offset < 0 {
			offset = 0
		}
		b := make([]byte, fileInfo.Size()-offset)
		_, err = file.ReadAt(b, offset)
		if notNil(err) {
			continue
		}
		if len(filenames) > 1 {
			if i > 0 {
				fmt.Println()
			}
			fmt.Println("==>", filename, "<==")
		}
		os.Stdout.Write(b)
	}
	os.Exit(status)
}`);

localStorage.setItem("zipstring",`package solutions

import "strconv"

func countDuplication(s string, i int) int {
	var count int = 0
	for _, v := range s[i:] {
		if v == rune(s[i]) {
			count++
		} else {
			break
		}
	}
	return count
}

func ZipString(s string) string {
	var result string
	i := 0
	for i < len(s) {
		counter := countDuplication(s, i)
		result = result + strconv.Itoa(counter) + string(s[i])
		i += int(counter)
	}
	return result
}`);
localStorage.setItem("wordflip",`package solutions

import "strings"

func WordFlip(arg string) string {
	if arg == "" {
		return "Invalid Output\n"
	}
	var str []string = strings.Split(arg, " ")
	_len := len(str)
	var str1 string
	for i := _len - 1; i >= 0; i-- {
		if len(str[i]) != 0 {
			str1 += str[i]
		}
		if i > 0 && len(str[i-1]) != 0 {
			str1 += " "
		}
	}
	return (strings.TrimSpace(str1) + "\n")
}`);
localStorage.setItem("wordanatomy",`package solutions

func WordAnatomy(initialWord string, prefixArray []string, suffixArray []string) string {
	matchedPrefix := ""
	matchedSuffix := ""

	for _, prefix := range prefixArray {
		if hasPrefix(initialWord, prefix) {
			matchedPrefix = prefix
			break
		}
	}
	for _, suffix := range suffixArray {
		if hasSuffix(initialWord, suffix) {
			matchedSuffix = suffix
			break
		}
	}

	return "prefix: " + matchedPrefix + "," + " suffix: " + matchedSuffix
}

func hasPrefix(initialWord, prefix string) bool {
	if len(prefix) > len(initialWord) {
		return false
	}

	return initialWord[:len(prefix)] == prefix
}

func hasSuffix(initialWord, suffix string) bool {
	if len(suffix) > len(initialWord) {
		return false
	}

	return initialWord[len(initialWord)-len(suffix):] == suffix
}`);

localStorage.setItem("weareunique",`package solutions

import "strings"

func WeAreUnique(str1 string, str2 string) int {
	var used [127]int
	if str1 == "" && str2 == "" {
		return -1
	}
	var argv []string = []string{str1, str2}
	k := 0
	i := 0
	for i < 2 {
		j := 0
		for j < len(argv[i]) {
			if used[argv[i][j]] == 0 && !strings.Contains(argv[1-i], string(argv[i][j])) {
				used[argv[i][j]] = 1
				k++
			}
			j++
		}
		i++
	}
	return k
}`);

localStorage.setItem("vowelsindex",`package solutions

func VowelsIndex(str string) []int {
	var res []int
	k := 0
	for i := 0; i < len(str); i++ {
		if str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' || str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U' {
			j := i
			if j < len(str) {
				res = append(res, j)
				k++
			}
		}
	}
	return res
}`);

localStorage.setItem("unzipstring",`package solutions

import "strconv"

func check(a rune) bool {
	if (a >= 'a' && a <= 'z') || (a >= 'A' && a <= 'Z'){
		return true
	}
	return false
}

func Unzipstring(str string) string {
	var result string
	if len(str) == 0 {
		return "Invalid output"
	}
	num, err := strconv.Atoi(string(str[0]))
	if err != nil {
		return "Invalid output"
	}
	for i := 0; i < num; i++ {
		if check(rune(str[1])) == true {
			result += string(str[1])
		} else {
			return "Invalid output"
		}
	}
	if len(str) > 2 {
		if Unzipstring(string(str[2:])) != "Invalid output" {
			result += Unzipstring(string(str[2:]))
		} else {
			return "Invalid output"
		}
	}
	return result
}`);

localStorage.setItem("unmatch",`package solutions

func Unmatch(elems []int) int {
	var quant int
	for _, el := range elems {
		quant = 0
		for _, v := range elems {
			if v == el {
				quant++
			}
		}
		if quant%2 != 0 {
			return el
		}
	}
	return -1
}`);

localStorage.setItem("twosum",`package solutions

func TwoSum(nums []int, target int) []int {
	for i := 0; i < len(nums); i++ {
		for j := i + 1; j < len(nums); j++ {
			if nums[i]+nums[j] == target {
				return []int{i, j}
			}
		}
	}
	return nil
}`);
localStorage.setItem("trimatoi",`package solutions

import (
	"strconv"
)

func TrimAtoi(s string) int {
	var s2 string
	for _, r := range s {
		if (r >= '0' && r <= '9') || (r == '-' && s2 == "") {
			s2 += string(r)
		}
	}
	a, _ := strconv.Atoi(s2)
	return a
}`);

localStorage.setItem("toupper",`package solutions

import "strings"

var ToUpper = strings.ToUpper`);

localStorage.setItem("tolower",`package solutions

import "strings"

var ToLower = strings.ToLower`);
localStorage.setItem("thirdtimeisacharm",`package solutions

import "strings"

func ThirdTimeIsACharm(arg string) string {
	if arg == "" || len(arg) < 3 {
		return "\n"
	}
	var str strings.Builder
	for i := 0; i < len(arg); i++ {
		if i == 0 {
			continue
		}
		j := i + 1
		if j%3 == 0 {
			str.WriteRune(rune(arg[i]))
		}
	}
	str.WriteRune(rune('\n'))
	return (str.String())
}`);

localStorage.setItem("swaplast",`package solutions

func SwapLast(slice []int) []int {
	dst := make([]int, len(slice))
	copy(dst, slice)

	if len(dst) < 2 {
		return dst
	}
	dst[len(dst)-1], dst[len(dst)-2] = dst[len(dst)-2], dst[len(dst)-1]
	return dst
}`);

localStorage.setItem("swapfirst",`package solutions

func SwapFirst(slice []int) []int {
	dst := make([]int, len(slice))
	copy(dst, slice)

	if len(dst) < 2 {
		return dst
	}
	dst[0], dst[1] = dst[1], dst[0]
	return dst
}`);
localStorage.setItem("sumarray",`package solutions

func SumArray(array []int) int {
	var sum int = 0
	for _, v := range array {
		sum += v
	}
	return sum
}`);
localStorage.setItem("swapfirst",`package solutions

func SwapFirst(slice []int) []int {
	dst := make([]int, len(slice))
	copy(dst, slice)

	if len(dst) < 2 {
		return dst
	}
	dst[0], dst[1] = dst[1], dst[0]
	return dst
}`);

localStorage.setItem("sumarray",`package solutions

func SumArray(array []int) int {
	var sum int = 0
	for _, v := range array {
		sum += v
	}
	return sum
}`);

localStorage.setItem("sum",`package solutions

import (
	"strconv"
)

func Sum(a, b string) int {
	numA, _ := strconv.Atoi(a)
	numB, _ := strconv.Atoi(b)
	if numA > 9 || numA < -9 || numB > 9 || numB < -9 {
		return 0
	}
	return numA + numB
}`);
localStorage.setItem("strrev",`package solutions

func StrRev(s string) string {
	runes := []rune(s)
	i := 0
	j := len(runes) - 1
	for i < j {
		runes[i], runes[j] = runes[j], runes[i]
		i++
		j--
	}
	return string(runes)
}`);

localStorage.setItem("strlen",`package solutions

func StrLen(s string) int {
	return len([]rune(s))
}`);
localStorage.setItem("strisnegative",`package solutions

import (
	"fmt"
	"strconv"
)

func StrisNegative(str string) {
	if len(str) > 0 {
		val, err := strconv.Atoi(str)
		if err != nil {
			fmt.Println("!")
		} else {
			if val < 0 {
				fmt.Println("N")
			} else if val == 0 {
				fmt.Println("0")
			} else {
				fmt.Println("P")
			}
		}
	} else {
		fmt.Println("!")
	}
}`);
localStorage.setItem("stringtointslice",`package solutions

func StringToIntSlice(str string) []int {
	runes := []rune(str)

	var result []int

	for i := 0; i < len(runes); i++ {
		result = append(result, int(runes[i]))
	}
	return result
}`);
localStorage.setItem("stringtobool",`package solutions

func StringToBool(s string) bool {
	if s == "True" || s == "T" || s == "t" {
		return true
	}
	return false
}`);
localStorage.setItem("squareroot",`package solutions

func SquareRoot(number int) int {
	if number == 1 {
		return 1
	}
	if number >= 0 {
		var sqrt float32 = float32(number / 2)
		var temp float32 = 0.0
		for sqrt != temp {
			temp = sqrt
			sqrt = float32((float32(number)/temp + temp) / 2)
		}
		return int(sqrt)
	}
	return -1
}`);
localStorage.setItem("sqrt",`package solutions

import "math"

func Sqrt(value int) int {
	sr := math.Sqrt(float64(value))
	if math.Mod(sr, 1) == 0 {
		return int(sr)
	}
	return 0
}`);
localStorage.setItem("splitwhitespaces",`package solutions

import "strings"

var SplitWhiteSpaces = strings.Fields`);
localStorage.setItem("split",`package solutions

import "strings"

var Split = strings.Split`);
localStorage.setItem("sortlistinsert",`package solutions

// structures for the linked lists
type NodeI struct {
	Data int
	Next *NodeI
}

func SortListInsert(l *NodeI, data_ref int) *NodeI {
	n := &NodeI{Data: data_ref}
	n.Next = nil

	if l == nil || l.Data >= n.Data {
		n.Next = l
		return n
	}
	temp := l
	for temp.Next != nil && temp.Next.Data < n.Data {
		temp = temp.Next
	}
	n.Next = temp.Next
	temp.Next = n

	return l
}`);
localStorage.setItem("sortedlistmerge",`package solutions

func SortedListMerge(l1 *NodeI, l2 *NodeI) *NodeI {
	if l1 == nil {
		return l2
	}
	if l2 == nil {
		return l1
	}
	if l1.Data <= l2.Data {
		l1.Next = SortedListMerge(l1.Next, l2)
		return l1
	}
	l2.Next = SortedListMerge(l1, l2.Next)
	return l2
}`);

localStorage.setItem("sliceremove",`package solutions

func SliceRemove(slice []int, num int) []int {
	newSlice := []int{}
	for _, v := range slice {
		if v != num {
			newSlice = append(newSlice, v)
		}
	}
	return newSlice
}`);

localStorage.setItem("sliceadd",`package solutions

func SliceAdd(slice []int, num int) []int {
	if len(slice) == 0 {
		return []int{num}
	}
	slice = append(slice, num)
	return slice
}`);
localStorage.setItem("slice",`package solutions

func ifNegative(a []string, n int) int {
	if n < 0 {
		n = len(a) + n
	}

	if n < 0 {
		n = 0
	} else if n > len(a) {
		n = len(a)
	}

	return n
}

func Slice(a []string, nbr ...int) []string {
	if len(nbr) == 0 {
		return a
	}

	first := nbr[0]
	if len(nbr) == 1 {
		if first < 0 {
			first = len(a) + first
			if first < 0 {
				return a
			}
		}
		return a[first:]
	}
	second := nbr[1]

	first = ifNegative(a, first)
	second = ifNegative(a, second)

	if first > second {
		return nil
	}

	return a[first:second]
}`);
localStorage.setItem("shoppingsummarycounter",`package solutions

import "strings"

func ShoppingSummaryCounter(str string) map[string]int {
	wordList := strings.Split(str, " ")
	counts := make(map[string]int)
	for _, word := range wordList {
		_, ok := counts[word]
		if ok {
			counts[word] += 1
		} else {
			counts[word] = 1
		}
	}
	return counts
}`);
localStorage.setItem("shoppinglistsort",`package solutions

func ShoppingListSort(slice []string) []string {
	for i := 0; i < len(slice)-1; i++ {
		for j := 0; j < len(slice)-i-1; j++ {
			if len(slice[j]) > len(slice[j+1]) {
				slice[j], slice[j+1] = slice[j+1], slice[j]
			}
		}
	}
	return slice
}`);
localStorage.setItem("setspace",`package solutions

func SetSpace(str string) string {
	res := ""
	for i := 0; i < len(str); i++ {
		if str[i] >= 'A' && str[i] <= 'Z' && i != 0 {
			res += " " + string(str[i])
		} else if str[i] >= 'a' && str[i] <= 'z' && i != 0 || i == 0 && str[i] >= 'A' && str[i] <= 'Z' {
			res += string(str[i])
		} else {
			return "Error"
		}
	}
	return res
}`);

localStorage.setItem("secondhalf",`package solutions

func SecondHalf(slice []int) []int {
	var result []int
	start := len(slice) / 2

	for i := start; i < len(slice); i++ {
		result = append(result, slice[i])
	}
	return result
}`);
localStorage.setItem("saveandmiss",`package solutions

func SaveAndMiss(arg string, num int) string {
	if num <= 0 || num > len(arg) {
		return string(arg)
	}
	_str := ""
	for i := 0; i < len(arg); i++ {
		if i != 0 && i%num == 0 {
			i += num
			if i > len(arg)-1 {
				break
			}
		}
		if i != len(arg) {
			_str += string(rune(arg[i]))
		}
	}
	return _str
}`);
localStorage.setItem("rot14",`package solutions

func Rot14(s string) (result string) {
	for _, r := range s {
		if r >= 'a' && r <= 'z' {
			if r >= 'm' {
				r -= 12
			} else {
				r += 14
			}
		} else if r >= 'A' && r <= 'Z' {
			if r >= 'M' {
				r -= 12
			} else {
				r += 14
			}
		}
		result += string(r)
	}
	return result
}`);
localStorage.setItem("rockandroll",`package solutions

func RockAndRoll(n int) string {
	if n < 0 {
		return "error: number is negative\n"
	}

	if (n%2 == 0) && (n%3 == 0) {
		return "rock and roll\n"
	}
	if n%2 == 0 {
		return "rock\n"
	}
	if n%3 == 0 {
		return "roll\n"
	}
	return "error: non divisible\n"
}`);
localStorage.setItem("reversestrings",`package solutions

func ReverseStrings(arr []string) string {
	var reversed string
	for i := len(arr) - 1; i >= 0; i-- {
		for j := len(arr[i]) - 1; j >= 0; j-- {
			reversed += string(arr[i][j])
		}
		if i != 0 && len(reversed) != 0 {
			reversed += " "
		}
	}
	return reversed
}`);

localStorage.setItem("reversesecondhalf",`package solutions

func ReverseSecondHalf(str string) string {
	if len(str) == 0 {
		return "Invalid Output\n"
	} else if len(str) == 1 {
		return (str + "\n")
	} else {
		res := ""
		i := 0
		for i = len(str) - 1; i >= int(len(str)/2); i-- {
			res += string(str[i])
		}
		res += "\n"
		return res
	}
}`);
localStorage.setItem("reversemenuindex",`package solutions

func ReverseMenuIndex(menu []string) []string {
	menuLen := len(menu)
	output := make([]string, menuLen)

	for i, n := range menu {
		j := menuLen - i - 1

		output[j] = n
	}
	return output
}`);

localStorage.setItem("revconcatalternate",`package solutions

func RevConcatAlternate(slice1, slice2 []int) []int {
	len1 := len(slice1)
	len2 := len(slice2)
	maxLen := len1
	result := make([]int, 0, len1+len2)

	if len2 > maxLen {
		maxLen = len2
	}

	for i := maxLen; i >= 0; i-- {
		if i < len1 {
			result = append(result, slice1[i])
		}
		if i < len2 {
			result = append(result, slice2[i])
		}
	}

	return result
}`);
localStorage.setItem("retainfirsthalf",`package solutions

import "strings"

func RetainFirstHalf(str string) string {
	if len(str) == 0 {
		return ""
	} else if len(str) == 1 {
		return (str)
	} else {
		var res strings.Builder
		i := 0
		for i = 0; i < int(len(str)/2); i++ {
			res.WriteRune(rune(str[i]))
		}
		return res.String()
	}
}`);
localStorage.setItem("repeatalpha",`package solutions

import "unicode"

func RepeatAlpha(s string) string {
	res := ""
	for _, r := range s {
		if unicode.IsLetter(r) {
			rep := unicode.ToLower(r) - 'a' + 1
			for i := 0; i < int(rep); i++ {
				res += string(r)
			}
		} else {
			res += string(r)
		}
	}
	return res
}`);
localStorage.setItem("removeodd",`package solutions

func RemoveOdd(str string) string {
	var result string
	for  i:=0; i<len(str); i++ {
		if (i+1)%2 != 0 || str[i] == ' ' {
			result += string(str[i])
		}
	}
	return result
}`);

localStorage.setItem("removeduplicate",`package solutions

func contains(slice []int, num int) bool {
	for _, v := range slice {
		if v == num {
			return true
		}
	}
	return false
}

func RemoveDuplicate(slice []int) []int {
	if len(slice) == 0 {
		return slice
	}
	newSlice := []int{}
	for _, v := range slice {
		if !contains(newSlice, v) {
			newSlice = append(newSlice, v)
		}
	}
	return newSlice
}`);
localStorage.setItem("reduceint",`package solutions

import "fmt"

func ReduceInt(a []int, f func(int, int) int) {
	acc := a[0]
	for i := 1; i < len(a); i++ {
		acc = f(acc, a[i])
	}
	fmt.Println(acc)
}`);
localStorage.setItem("recursivepower",`package solutions

import "math"

func RecursivePower(nb, power int) int {
	if power < 0 {
		return 0
	}
	return int(math.Pow(float64(nb), float64(power)))
}`);
localStorage.setItem("recursivefactorial",`package solutions

func RecursiveFactorial(nb int) int {
	limit := 20
	if nb < 0 || nb > limit {
		return 0
	}
	if nb == 0 {
		return 1
	}
	return nb * RecursiveFactorial(nb-1)
}`);
localStorage.setItem("rectperimeter",`package solutions

func RectPerimeter(w, h int) int {
	if (w < 0) || (h < 0) {
		return -1
	}

	return 2 * (w + h)
}`);
localStorage.setItem("quaterofayear",`package solutions

func QuarterOfAYear(month int) int {
	if month < 1 || month > 12 {
		return -1
	}
	return (month + 2) / 3
}`);
localStorage.setItem("printwordstables",`package solutions

import "fmt"

func PrintWordsTables(a []string) {
	for _, s := range a {
		fmt.Println(s)
	}
}`);
localStorage.setItem("printstr",`package solutions

import "fmt"

func PrintStr(s string) {
	fmt.Print(s)
}`);
localStorage.setItem("printrange",`package solutions

import "github.com/01-edu/z01"

func PrintRange(n, m int) {
	if n < 0 && m < 0 || n > 9 && m > 9 {
		z01.PrintRune('\n')
		return
	}
	if n < 0 {
		n = 0
	} else if n > 9 {
		n = 9
	}
	if m < 0 {
		m = 0
	} else if m > 9 {
		m = 9
	}
	if n > m {
		for i := n; i >= m; i-- {
			z01.PrintRune(rune(i) + '0')
			if i != m {
				z01.PrintRune(' ')
			}
		}
	} else {
		for i := n; i <= m; i++ {
			z01.PrintRune(rune(i) + '0')
			if i != m {
				z01.PrintRune(' ')
			}
		}
	}
	z01.PrintRune('\n')
}`);
localStorage.setItem("printnbrinorder",`package solutions

import (
	"fmt"
	"sort"
)

func intToDigits(n int) (digits []int) {
	for n > 0 {
		if n == 0 {
			digits = append(digits, 0)
		} else {
			digits = append(digits, n%10)
		}
		n /= 10
	}
	return
}

func PrintNbrInOrder(n int) {
	if n == 0 {
		fmt.Print("0")
		return
	}
	digits := intToDigits(n)
	sort.Ints(digits)
	for _, i := range digits {
		fmt.Printf("%c", rune(i)+'0')
	}
}`);
localStorage.setItem("printrange",`package solutions

import "github.com/01-edu/z01"

func PrintRange(n, m int) {
	if n < 0 && m < 0 || n > 9 && m > 9 {
		z01.PrintRune('\n')
		return
	}
	if n < 0 {
		n = 0
	} else if n > 9 {
		n = 9
	}
	if m < 0 {
		m = 0
	} else if m > 9 {
		m = 9
	}
	if n > m {
		for i := n; i >= m; i-- {
			z01.PrintRune(rune(i) + '0')
			if i != m {
				z01.PrintRune(' ')
			}
		}
	} else {
		for i := n; i <= m; i++ {
			z01.PrintRune(rune(i) + '0')
			if i != m {
				z01.PrintRune(' ')
			}
		}
	}
	z01.PrintRune('\n')
}`);
localStorage.setItem("printmemory",`package solutions

import (
	"fmt"
	"strings"
)

func PrintMemory(a [10]byte) {
	str := ""
	for i, nbr := range a {
		fmt.Printf("%.2x", nbr)

		if ((i+1)%4 == 0 && i != 0) || i == len(a)-1 {
			fmt.Println()
		} else {
			fmt.Print(" ")
		}

		if nbr >= 33 && nbr <= 126 {
			str += string(rune(nbr))
		} else {
			str += "."
		}
	}
	fmt.Println(str + strings.Repeat(".", 10-len(a)))
}`);
localStorage.setItem("printifnot",`package solutions

func PrintIfNot(arg string) string {
	if len(arg) >= 3 {
		return "Invalid Input\n"
	} else {
		return "G\n"
	}
}`);
localStorage.setItem("printif",`package solutions

func PrintIf(arg string) string {
	if len(arg) != 0 && len(arg) < 3 {
		return "Invalid Input\n"
	}
	return "G\n"
}`);
localStorage.setItem("printcombn",`package solutions

import "fmt"

func show(n int, table [9]int, tmax [9]int) {
	i := 0
	for i < n {
		fmt.Print(table[i])
		i++
	}
	if table[0] != tmax[0] {
		fmt.Print(", ")
	}
}

func printComb1() {
	table := [9]int{0}
	tmax := [9]int{9}
	for table[0] <= tmax[0] {
		show(1, table, tmax)
		table[0]++
	}
}

func PrintCombN(n int) {
	table := [9]int{0, 1, 2, 3, 4, 5, 6, 7, 8}
	tmax := [9]int{}

	if n == 1 {
		printComb1()
	} else {
		i := n - 1
		j := 9
		for i >= 0 {
			tmax[i] = j
			i--
			j--
		}
		i = n - 1
		for table[0] < tmax[0] {
			if table[i] != tmax[i] {
				show(n, table, tmax)
				table[i]++
			}
			if table[i] == tmax[i] {
				if table[i-1] != tmax[i-1] {
					show(n, table, tmax)
					table[i-1]++
					j = i
					for j < n {
						table[j] = table[j-1] + 1
						j++
					}
					i = n - 1
				}
			}
			for table[i] == tmax[i] && table[i-1] == tmax[i-1] && i > 1 {
				i--
			}
		}
		show(n, table, tmax)
	}
	fmt.Println()
}`);
localStorage.setItem("printcomb2",`package solutions

import "fmt"

func PrintComb2() {
	for a := 0; a <= 98; a++ {
		for b := a + 1; b <= 99; b++ {
			fmt.Printf("%.2d %.2d", a, b)
			if a != 98 || b != 99 {
				fmt.Print(", ")
			}
		}
	}
	fmt.Println()
}`);
localStorage.setItem("printcomb",`package solutions

import "fmt"

func PrintComb() {
	for i := '0'; i <= '7'; i++ {
		for j := i + 1; j <= '8'; j++ {
			for k := j + 1; k <= '9'; k++ {
				fmt.Printf("%c%c%c", i, j, k)
				if i < '7' {
					fmt.Print(", ")
				}
			}
		}
	}
	fmt.Println()
}`);
localStorage.setItem("popint",`package solutions

func PopInt(ints []int) []int {
	if len(ints) == 0 {
		return ints
	}
	return ints[:len(ints)-1]
}`);
localStorage.setItem("podiumposition",`package solutions

func PodiumPosition(podium [][]string) [][]string {
	for i, j := 0, len(podium) - 1; i < j; i, j = i + 1, j - 1 {
        podium[i], podium[j] = podium[j], podium[i]
    }
	return podium
}`);
localStorage.setItem("passwordenthropy",`package solutions

import (
	"math"
	"unicode"
)

func Entropy(password string) float64 {
	const (
		lowerBit = 1 << iota
		upperBit
		digitBit
		specialBit
	)

	used := 0
	poolSize := 0.0

	for _, r := range password {
		if used&lowerBit == 0 && unicode.IsLower(r) {
			used |= lowerBit
			poolSize += 26
		} else if used&upperBit == 0 && unicode.IsUpper(r) {
			used |= upperBit
			poolSize += 26
		} else if used&digitBit == 0 && unicode.IsDigit(r) {
			used |= digitBit
			poolSize += 10
		} else if used&specialBit == 0 && !unicode.IsLetter(r) && !unicode.IsDigit(r) {
			used |= specialBit
			poolSize += 32
		}

		if used == lowerBit|upperBit|digitBit|specialBit {
			break
		}
	}

	if poolSize == 0 {
		return 0
	}

	return float64(len(password)) * math.Log2(poolSize)
}`);
localStorage.setItem("oddlength",`package solutions

func Oddlength(strings []string) []string {
	var newSlice []string
	for _, str := range strings {
		if len(str)%2 == 1 {
			newSlice = append(newSlice, str)
		}
	}
	return newSlice
}`);
localStorage.setItem("numofdigits",`package solutions

func Numofdigits(n int) int {
	var count int = 0
	for n > 0 {
		n = n / 10
		count++
	}
	return count
}`);
localStorage.setItem("nrune",`package solutions

func NRune(s string, n int) rune {
	if n > len(s) || n < 1 {
		return 0
	}
	runes := []rune(s)
	return runes[n-1]
}`);
localStorage.setItem("notdecimal",`package solutions

import (
	"math"
	"strconv"
)

func NotDecimal(dec string) string {
	j := -1
	n := 0
	if len(dec) == 0 {
		return "\n"
	}
	for i := 0; i < len(dec); i++ {
		if j == -1 && dec[i] == '.' {
			j++
		} else if j == 0 {
			n++
		}
	}
	s, err := strconv.ParseFloat(dec, 64)
	if err == nil {
		return strconv.Itoa(int(s*math.Pow(10, float64(n)))) + "\n"
	}
	return (dec + "\n")
}`);
localStorage.setItem("multorsum",`package solutions

func MultOrSum(ints []int, init int) int {
	if len(ints) == 0 {
		return 0
	}
	result := init
	for _, num := range ints {
		if num%2 == 0 {
			result += num
			continue
		}
		result *= num
	}
	return result
}`);
localStorage.setItem("maxwordcountn",`package solutions

import (
	"sort"
	"strings"
)

type keyValue struct {
	Key   string
	Value int
}

func MaxWordCountN(text string, n int) map[string]int {
	wordOccurences := make(map[string]int)
	for _, word := range strings.Split(text, " ") {
		wordOccurences[word]++
	}

	var keyValSlice []keyValue
	for k, v := range wordOccurences {
		keyValSlice = append(keyValSlice, keyValue{k, v})
	}

	sort.Slice(keyValSlice, func(i, j int) bool {
		if keyValSlice[i].Value == keyValSlice[j].Value {
			return keyValSlice[i].Key < keyValSlice[j].Key
		} else {
			return keyValSlice[i].Value > keyValSlice[j].Value
		}
	})

	nMaxWordOccurences := make(map[string]int)
	for _, kv := range keyValSlice[0:n] {
		nMaxWordOccurences[kv.Key] = kv.Value
	}
	return nMaxWordOccurences
}`);
localStorage.setItem("max",`package solutions

import "sort"

func Max(a []int) int {
	if len(a) == 0 {
		return 0
	}
	sort.Ints(a)
	return a[len(a)-1]
}`);
localStorage.setItem("map",`package solutions

func Map(f func(int) bool, a []int) (result []bool) {
	for _, el := range a {
		result = append(result, f(el))
	}
	return
}`);
localStorage.setItem("makerange",`package solutions

func MakeRange(min, max int) []int {
	size := max - min

	if size <= 0 {
		return nil
	}
	answer := make([]int, size)
	for i := range answer {
		answer[i] = min
		min++
	}
	return answer
}`);
localStorage.setItem("longestword",`package solutions

import (
	"strings"
	"unicode"
)

func isValidWord(word string) bool {
	if word == "" {
		return false
	}

	last := rune(word[len(word)-1])
	if strings.ContainsRune(".,!?;:", last) {
		word = word[:len(word)-1]
		if word == "" {
			return false
		}
	}

	firstRune := []rune(word)[0]
	if !unicode.IsLetter(firstRune) {
		return false
	}

	for _, r := range word {
		if !unicode.IsLetter(r) {
			return false
		}
	}

	return true
}

func LongestWord(s string) string {
	words := strings.Fields(s)
	longest := ""

	for _, w := range words {
		if isValidWord(w) {
			if len([]rune(w)) > len([]rune(longest)) {
				longest = w
			}
		}
	}

	return longest
}`);
localStorage.setItem("loafofbread",`package solutions

import "strings"

func LoafOfBread(str string) string {
	if str == "" {
		return "\n"
	}
	if len(str) < 5 {
		return "Invalid Output\n"
	}
	var _str strings.Builder
	j := 0
	for i := 0; i < len(str); i++ {
		if j < 5 && rune(str[i]) == ' ' {
			continue
		}
		if j == 5 {
			if i != len(str)-1 && str[i+1] == ' ' {
				continue
			}
			if i == len(str)-1 {
				break
			}
			_str.WriteRune(' ')
			j = 0
			continue
		}
		_str.WriteRune(rune(str[i]))
		j++
	}
	_str.WriteRune(rune('\n'))
	return (_str.String())
}`);
localStorage.setItem("listsort",`package solutions

func ListSort(l *NodeI) *NodeI {
	head := l
	if head == nil {
		return nil
	}
	head.Next = ListSort(head.Next)

	if head.Next != nil && head.Data > head.Next.Data {
		head = move(head)
	}
	return head
}

func move(l *NodeI) *NodeI {
	p := l
	n := l.Next
	ret := n

	for n != nil && l.Data > n.Data {
		p = n
		n = n.Next
	}
	p.Next = l
	l.Next = n
	return ret
}`);
localStorage.setItem("listsize",`package solutions

func ListSize(l *List) int {
	count := 0
	iterator := l.Head
	for iterator != nil {
		count++
		iterator = iterator.Next
	}
	return count
}`);
localStorage.setItem("listreverse",`package solutions

func ListReverse(l *List) {
	current := l.Head
	var prev *NodeL
	prev = nil

	for current != nil {
		next := current.Next
		current.Next = prev
		prev = current
		current = next
	}
	l.Head = prev
}`);
localStorage.setItem("listremoveif",`package solutions

// removes all elements that are equal to the data_ref
func ListRemoveIf(l *List, data_ref interface{}) {
	temp := l.Head
	prev := l.Head

	for temp != nil && temp.Data == data_ref {
		l.Head = temp.Next
		temp = l.Head
	}
	for temp != nil {
		if temp.Data != data_ref {
			prev = temp
		}
		prev.Next = temp.Next
		temp = prev.Next
	}
}`);
localStorage.setItem("listpushfront",`package solutions

// inserts node on the first position of the list
func ListPushFront(l *List, data interface{}) {
	n := &NodeL{Data: data}

	if l.Head == nil {
		l.Head = n
		return
	}

	n.Next = l.Head
	l.Head = n
}`);
localStorage.setItem("listpushback",`package solutions

type NodeL struct {
	Data interface{}
	Next *NodeL
}

type List struct {
	Head *NodeL
	Tail *NodeL
}

func ListPushBack(l *List, data interface{}) {
	n := &NodeL{Data: data}

	if l.Head == nil {
		l.Head = n
	} else {
		l.Tail.Next = n
	}
	l.Tail = n
}`);
localStorage.setItem("listmerge",`package solutions

// merges the 2 lists in one (in the end of the first list)
func ListMerge(l1 *List, l2 *List) {
	if l1.Head == nil {
		l1.Head, l1.Tail = l2.Head, l2.Tail
		return
	}
	l1.Tail.Next = l2.Head
}`);
localStorage.setItem("listlast",`package solutions

// gives the last element of the list
func ListLast(l *List) interface{} {
	if l.Head == nil {
		return nil
	}
	for l.Head != nil {
		if l.Head.Next == nil {
			return l.Head.Data
		}
		l.Head = l.Head.Next
	}
	return l.Head.Data
}`);
localStorage.setItem("listforeachif",`package solutions

// compare each element of the linked list to see if it is a String
func IsPositiveNode(node *NodeL) bool {
	switch node.Data.(type) {
	case int, float32, float64, byte:
		return node.Data.(int) > 0
	default:
		return false
	}
}

func IsAlNode(node *NodeL) bool {
	switch node.Data.(type) {
	case int, float32, float64, byte:
		return false
	default:
		return true
	}
}

// applies the function f on each string if the boolean function comp returns true
func ListForEachIf(l *List, f func(*NodeL), comp func(*NodeL) bool) {
	it := l.Head
	for it != nil {
		if comp(it) {
			f(it)
		}
		it = it.Next
	}
}`);
localStorage.setItem("listforeach",`package solutions

// applies a function in argument to each element of the linked list
func ListForEach(l *List, f func(*NodeL)) {
	it := l.Head
	for it != nil {
		f(it)
		it = it.Next
	}
}

func Add2_node(node *NodeL) {
	switch node.Data.(type) {
	case int:
		node.Data = node.Data.(int) + 2
	case string:
		node.Data = node.Data.(string) + "2"
	}
}

func Subtract3_node(node *NodeL) {
	switch node.Data.(type) {
	case int:
		node.Data = node.Data.(int) - 3
	case string:
		node.Data = node.Data.(string) + "-3"
	}
}`);
localStorage.setItem("listfind",`package solutions

// finds the element and returns the first data from the node that is a string
func ListFind(l *List, ref interface{}, comp func(a, b interface{}) bool) *interface{} {
	iterator := l.Head
	for iterator != nil {
		if comp(iterator.Data, ref) {
			return &iterator.Data
		}

		iterator = iterator.Next
	}
	return nil
}

// defines for two elements the equality criteria
func CompStr(a, b interface{}) bool {
	return a == b
}`);
localStorage.setItem("listclear",`package solutions

func ListClear(l *List) {
	temp := l.Head
	var next *NodeL
	for temp != nil {
		next = temp.Next
		temp = nil
		temp = next
	}

	l.Head = nil
}`);
localStorage.setItem("listat",`package solutions

// returs the node in a given position
func ListAt(l *NodeL, nbr int) *NodeL {
	index := 0
	count := 0
	head := l

	for head != nil {
		index++
		head = head.Next
	}
	if nbr <= index {
		for l != nil {
			if count == nbr {
				return l
			}
			count++
			l = l.Next
		}
	}
	return nil
}`);
localStorage.setItem("leapyear",`package solutions

func LeapYear(year int) bool {
	if year <= 0 {
		return false
	}
	if year%4 == 0 {
		if year%100 == 0 {
			return year%400 == 0
		}
		return true
	}
	return false
}`);
localStorage.setItem("lcm",`package solutions

func gcd(first, second int) int {
	if second == 0 {
		return first
	}
	return gcd(second, first%second)
}

func Lcm(first, second int) int {
	return first / gcd(second, first%second) * second
}`);
localStorage.setItem("lastword",`package solutions

import (
	"strings"
)

func LastWord(s string) string {
	words := strings.Fields(s)
	if len(words) > 0 {
		return words[len(words)-1] + "\n"
	}
	return "\n"
}`);
localStorage.setItem("lastrune",`package solutions

func LastRune(s string) rune {
	runes := []rune(s)
	index := len(runes) - 1
	return runes[index]
}`);
localStorage.setItem("jumpover",`package solutions

import "strings"

func JumpOver(arg string) string {
	if arg == "" || len(arg) < 3 {
		return "\n"
	}
	var str strings.Builder
	for i := 0; i < len(arg); i++ {
		if i != 0 {
			j := i + 1
			if j%3 == 0 {
				str.WriteRune(rune(arg[i]))
			}
		}
	}
	str.WriteRune(rune('\n'))
	return (str.String())
}`);
localStorage.setItem("join",`package solutions

import "strings"

var Join = strings.Join`);
localStorage.setItem("itoabase",`package solutions

import (
	"strconv"
	"strings"
)

func ItoaBase(value, base int) string {
	if base < 2 || base > 16 {
		return ""
	}

	return strings.ToUpper(strconv.FormatInt(int64(value), base))
}`);
localStorage.setItem("itoa",`package solutions

import "strconv"

var Itoa = strconv.Itoa`);
localStorage.setItem("iterativepower",`package solutions

import "strconv"

var Itoa = strconv.Itoa`);
localStorage.setItem("iterativefactorial",`package solutions

func IterativeFactorial(nb int) int {
	limit := 20
	if nb < 0 || nb > limit {
		return 0
	}
	if nb == 0 {
		return 1
	}
	return nb * IterativeFactorial(nb-1)
}`);
localStorage.setItem("isupper",`package solutions

import "github.com/01-edu/go-tests/lib/is"

var IsUpper = is.Upper`);
localStorage.setItem("issquare",`package solutions

func IsSquare(number int, square int) bool {
	if number < 0 || square < 0 {
		return false
	}
	return number*number == square
}`);
localStorage.setItem("issorted",`package solutions

func IsSorted(f func(int, int) int, a []int) bool {
	ascendingOrdered := true
	descendingOrdered := true

	for i := 1; i < len(a); i++ {
		if f(a[i-1], a[i]) < 0 {
			ascendingOrdered = false
		}
	}

	for i := 1; i < len(a); i++ {
		if f(a[i-1], a[i]) > 0 {
			descendingOrdered = false
		}
	}

	return ascendingOrdered || descendingOrdered
}`);
localStorage.setItem("issamestring",`package solutions

import "unicode"

func getAlphabetIndex(c byte) int {
	if c >= 'a' && c <= 'z' {
		return int(c - 'a')
	}
	if c >= 'A' && c <= 'Z' {
		return int(c - 'A')
	}
	return -1
}

func IsSameString(s1, s2 string) bool {
	if len(s1) != len(s2) {
		return false
	}
	i := 0
	for i < len(s1) && i < len(s2) {
		if (unicode.IsLetter(rune(s1[i])) && unicode.IsLetter(rune(s2[i]))) &&
			(getAlphabetIndex(s1[i]) != getAlphabetIndex(s2[i])) {
			return false
		} else if !(unicode.IsLetter(rune(s1[i])) && unicode.IsLetter(rune(s2[i]))) && s1[i] != s2[i] {
			return false
		}
		i++
	}
	if i < len(s1) || i < len(s2) {
		return false
	}
	return true
}`);
localStorage.setItem("isprintable",`package solutions

import "unicode"

func IsPrintable(s string) bool {
	for _, r := range s {
		if !unicode.IsPrint(r) {
			return false
		}
	}
	return true
}`);
localStorage.setItem("isprime",`package solutions

import "github.com/01-edu/go-tests/lib/is"

var IsPrime = is.Prime`);
localStorage.setItem("isnumeric",`package solutions

import "github.com/01-edu/go-tests/lib/is"

var IsNumeric = is.Digit`);
localStorage.setItem("isnegative",`package solutions

import "fmt"

func IsNegative(n int) {
	if n < 0 {
		fmt.Println("T")
	} else {
		fmt.Println("F")
	}
}`);
localStorage.setItem("ismultiple",`package solutions

func IsMultiple(num int) bool {
	if num > 0 && (num%3 == 0 || num%7 == 0) {
		return true
	}
	return false
}`);
localStorage.setItem("islower",`package solutions

import "github.com/01-edu/go-tests/lib/is"

var IsLower = is.Lower`);
localStorage.setItem("iscapitalized",`package solutions

func IsCapitalized(s string) bool {
	if len(s) == 0 {
		return false
	}

	for i := 0; i < len(s); i++ {
		if s[i] >= 'a' && s[i] <= 'z' && i != 0 && s[i-1] == ' ' {
			return false
		}
	}
	return !(s[0] >= 'a' && s[0] <= 'z')
}`);
localStorage.setItem("isalpha",`package solutions

import "unicode"

func IsAlpha(s string) bool {
	for _, r := range s {
		if !unicode.IsDigit(r) && !unicode.Is(unicode.Latin, r) {
			return false
		}
	}
	return true
}`);
localStorage.setItem("index",`package solutions

import "strings"

var Index = strings.Index`);
localStorage.setItem("hashcode",`package solutions

func HashCode(dec string) string {
	size := len(dec)
	hashed := ""
	for _, char := range dec {
		hash := (int(char) + size) % 127
		if hash < 32 || hash > 126 {
			hash += 33
		}
		hashed += string(hash)
	}
	return hashed
}`);
localStorage.setItem("halfslice",`package solutions

func HalfSlice(slice []int) []int {
	var result []int
	size := len(slice) / 2

	if len(slice)%2 != 0 {
		size = len(slice)/2 + 1
	}
	for i := 0; i < size; i++ {
		result = append(result, slice[i])
	}
	return result
}`);
localStorage.setItem("gcd",`package solutions

func Gcd(a, b uint) uint {
	for a != b {
		if a > b {
			a -= b
		} else {
			b -= a
		}
	}
	return a
}`);
localStorage.setItem("fromto",`package solutions

import "strconv"

func FromTo(from, to int) string {
	result := ""

	if from > 99 || from < 0 || to > 99 || to < 0 {
		return "Invalid\n"
	} else if from == to && from < 10 {
		return "0" + strconv.Itoa(from) + "\n"
	}
	if from > to {
		for i := from; i >= to; i-- {
			if i < 10 {
				result += "0"
			}
			result += strconv.Itoa(i)
			if i-1 >= to {
				result += ", "
			}
		}
		return result + "\n"
	}
	for i := from; i <= to; i++ {
		if i < 10 {
			result += "0"
		}
		result += strconv.Itoa(i)
		if i+1 <= to {
			result += ", "
		}
	}
	return result + "\n"
}`);
localStorage.setItem("foreach",`package solutions

func ForEach(f func(int), a []int) {
	for _, el := range a {
		f(el)
	}
}`);
localStorage.setItem("fooddeliverytime",`package solutions

type food struct {
	preptime int
}

func FoodDeliveryTime(order string) int {
	burger := food{
		preptime: 15,
	}

	chips := food{
		preptime: 10,
	}

	nuggets := food{
		preptime: 12,
	}

	if order == "burger" {
		return burger.preptime
	} else if order == "chips" {
		return chips.preptime
	} else if order == "nuggets" {
		return nuggets.preptime
	} else {
		return 404
	}
}`);
localStorage.setItem("foldit",`package solutions

import "fmt"

func FoldInt(f func(int, int) int, a []int, n int) {
	result := n
	for _, v := range a {
		result = f(result, v)
	}
	fmt.Println(result)
}`);
localStorage.setItem("firstword",`package solutions

import "strings"

func FirstWord(s string) string {
	words := strings.Fields(s)
	res := "\n"
	if len(words) > 0 {
		res = words[0] + res
	}
	return res
}`);
localStorage.setItem("firstrune",`package solutions

func FirstRune(s string) rune {
	runes := []rune(s)
	return runes[0]
}`);
localStorage.setItem("findprevprime",`package solutions

import "github.com/01-edu/go-tests/lib/is"

func FindPrevPrime(nb int) int {
	if nb < 2 {
		return 0
	}
	if is.Prime(nb) {
		return nb
	}
	return FindPrevPrime(nb - 1)
}`);
localStorage.setItem("findnextprime",`package solutions

import "github.com/01-edu/go-tests/lib/is"

func FindNextPrime(nb int) int {
	if is.Prime(nb) {
		return nb
	}
	return FindNextPrime(nb + 1)
}`);
localStorage.setItem("findmissingnumber",`package solutions

func FindMissingNumber(nums []int) int {
	for i := 0; i < len(nums); i++ {
		for j := i + 1; j < len(nums); j++ {
			if nums[i] > nums[j] {
				nums[i], nums[j] = nums[j], nums[i]
			}
		}
	}
	for i := 0; i < len(nums); i++ {
		if i+1 < len(nums) && nums[i]+1 != nums[i+1] {
			return nums[i] + 1
		}
	}
	return -1
}`);
localStorage.setItem("fifthandskip",`package solutions

import "strings"

func FifthAndSkip(str string) string {
	if str == "" {
		return "\n"
	}
	if len(str) < 5 {
		return "Invalid Input\n"
	}
	s := strings.ReplaceAll(str, " ", "")
	var _str strings.Builder
	j := 0
	for _, char := range s {
		if j == 5 {
			_str.WriteRune(rune(' '))
			j = 0
		} else {
			_str.WriteRune(rune(char))
			j++
		}
	}
	_str.WriteRune('\n')
	return _str.String()
}`);
localStorage.setItem("fibonacci",`package solutions

func Fibonacci(i int) int {
	if i < 0 {
		return -1
	}
	if i == 0 {
		return 0
	}
	if i == 1 {
		return 1
	}
	return Fibonacci(i-1) + Fibonacci(i-2)
}`);
localStorage.setItem("evenlength",`package solutions

func EvenLength(strings []string) []string {
	var newSlice []string
	for _, str := range strings {
		if len(str)%2 == 0 {
			newSlice = append(newSlice, str)
		}
	}
	return newSlice
}`);
localStorage.setItem("eightqueens",`package solutions

import "fmt"

const size = 8

// board is a chessboard composed of boolean squares, a true square means a queen is on it
// a false square means it is a free square
var board [size][size]bool

// goodDirection check that there is no queen on the segment that starts at (x, y)
// coordinates, points into the direction vector (vx, vy) and ends at the edge of the board
func goodDirection(x, y, vx, vy int) bool {
	// x and y are still on board
	for 0 <= x && x < size &&
		0 <= y && y < size {
		if board[x][y] {
			// Not a good line : the square is already occupied
			return false
		}
		x += vx // Move x in the right direction
		y += vy // Move y in the right direction
	}
	// All clear
	return true
}

// goodSquare makes all the necessary line checks for the queens movements
func goodSquare(x, y int) bool {
	return goodDirection(x, y, +0, -1) &&
		goodDirection(x, y, +1, -1) &&
		goodDirection(x, y, +1, +0) &&
		goodDirection(x, y, +1, +1) &&
		goodDirection(x, y, +0, +1) &&
		goodDirection(x, y, -1, +1) &&
		goodDirection(x, y, -1, +0) &&
		goodDirection(x, y, -1, -1)
}

func printQueens() {
	for x := 0; x < size; x++ {
		for y := 0; y < size; y++ {
			if board[x][y] {
				// We have found a queen, let's print her y
				fmt.Printf("%c", rune(y)+'1')
			}
		}
	}
	fmt.Println()
}

// tryX tries, for a given x (column) to find a y (row) so that the queen on (x, y) is a part
// of the solution to the problem
func tryX(x int) {
	for y := 0; y < size; y++ {
		if goodSquare(x, y) {
			// Since the square is good for the queen, let's put one on it:
			board[x][y] = true

			if x == size-1 {
				// x is the biggest possible x, it means that we just placed the last
				// queen on the board, so the solution is complete and we can print it
				printQueens()
			} else {
				// let's try to put another queen on the next empty x (column)
				tryX(x + 1)
			}

			// remove the queen of the board, to try other y values
			board[x][y] = false
		}
	}
}

func EightQueens() {
	// try the first column
	tryX(0)
}`);
localStorage.setItem("divisors",`package solutions

func Divisors(n int) int {
	var count int = 0
	if n > 0 {
		for i := 1; i <= n; i++ {
			if n%i == 0 {
				count++
			}
		}
	}
	return count
}`);
localStorage.setItem("digitlen",`package solutions

func DigitLen(n, base int) int {

	if base < 2 || base > 36 {
		return -1
	}

	if n < 0 {
		n = -n
	}

	count := 0
	for n > 0 {
		n /= base
		count++
	}
	return count
}`);
localStorage.setItem("descendcomb",`package solutions

import "github.com/01-edu/z01"

func printInteger(a int) {
	secondDigits := (a % 10)
	firstDigits := (a / 10)

	z01.PrintRune(rune(firstDigits) + 48)
	z01.PrintRune(rune(secondDigits) + 48)
}

func DescendComb() {
	for i := 99; i >= 0; i-- {
		for j := i - 1; j >= 0; j-- {
			printInteger(i)
			z01.PrintRune(' ')
			printInteger(j)

			if i == 1 && j == 0 {
				break
			}
			z01.PrintRune(',')
			z01.PrintRune(' ')
		}
	}
}`);
localStorage.setItem("descendappendrange",`package solutions

func DescendAppendRange(max, min int) []int {
	answer := []int{}
	if max <= min {
		return []int{}
	} else {
		for i := max ; i > min; i-- {
			answer = append(answer, i)
		}
	}
	return answer
}`);
localStorage.setItem("delete",`package solutions

func Delete(ints []int, position int) []int {
	if position > len(ints)-1 {
		return ints
	}
	result := []int{}
	for i, integer := range ints {
		if i == position-1 {
			continue
		}
		result = append(result, integer)
	}
	return result
}`);
localStorage.setItem("dealapackofcards",`package solutions

import "fmt"

func DealAPackOfCards(deck []int) {
	for _, v := range deck {
		if v == 1 {
			fmt.Printf("Player 1: %v, %v, %v", deck[0], deck[1], deck[2])
			fmt.Println()
		} else if v == 3 {
			fmt.Printf("Player 2: %v, %v, %v", deck[3], deck[4], deck[5])
			fmt.Println()
		} else if v == 6 {
			fmt.Printf("Player 3: %v, %v, %v", deck[6], deck[7], deck[8])
			fmt.Println()
		} else if v == 9 {
			fmt.Printf("Player 4: %v, %v, %v", deck[9], deck[10], deck[11])
			fmt.Println()
		}
	}
}`);
localStorage.setItem("countstars",`package solutions

import "strconv"

func CountStars(num int) string {
	res := ""
	star := " star"
	stars := " stars"
	dots := "..."
	if num <= 0 {
		return "No stars"
	}
	if num == 1 {
		return strconv.Itoa(1) + star
	}
	for i := 1; i <= num; i++ {
		if i == 1 {
			res = res + strconv.Itoa(i) + star + dots
		} else if i != num {
			res = res + strconv.Itoa(i) + stars + dots
		} else {
			res = res + strconv.Itoa(i) + stars
		}
	}
	return res
}`);
localStorage.setItem("countrepeats",`package solutions

import (
	"strconv"
)

func CountRepeats(s string) string {
	if s == "" {
		return s
	}

	var result string
	var counter = 1

	for i := 0; i < len(s); i++ {
		if i+1 < len(s) && string(s[i]) == string(s[i+1]) {
			counter++
		} else {
			result += string(s[i])
			if counter > 1 {
				result += strconv.Itoa(counter)
			}
			counter = 1
		}
	}
	return result
}`);
localStorage.setItem("countnegative",`package solutions

func CountNegative(numbers []int) int {
	count := 0
	if len(numbers) == 0 {
		return count
	}
	for _, number := range numbers {
		if number < 0 {
			count++
		}
	}
	return count
}`);
localStorage.setItem("countif",`package solutions

func CountIf(f func(string) bool, a []string) int {
	counter := 0
	for _, el := range a {
		if f(el) {
			counter++
		}
	}

	return counter
}`);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);
localStorage.setItem("",``);



