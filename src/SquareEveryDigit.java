public class SquareEveryDigit {
    public static void main(String[] args) {
        int n = 9119;
        String numberString = String.valueOf(n);
        String[] numbs = numberString.split("");
        String res = "";

        for(String ns: numbs) {
            int convertToNum = Integer.parseInt(ns);
            res += (int) Math.pow(convertToNum, 2)+"";
        }

        System.out.println(res);
    }
}
