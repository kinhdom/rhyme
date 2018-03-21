import { Component, OnInit } from '@angular/core';
import { Word } from '../word';
import { element } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  textvalue = '';
  
  isCorrectWord = false;
  arrWords = [];
  arrNguyenAm = ['a', 'ă', 'â', 'e', 'ê', 'i', 'o', 'ô', 'ơ', 'u', 'ư', 'y']
  arrPhuAm = ['', 'B', 'C', 'Ch', 'D', 'Đ', 'G', 'Gh', 'Gi', 'H', 'K', 'Kh', 'L', 'M', 'N', 'Ng', 'Nh', 'Ngh', 'P', 'Ph', 'Qu', 'R', 'S', 'T', 'Th', 'Tr', 'V', 'X'];

  constructor() {
  }
  onKey() {
    this.arrWords = [];
    let text = this.textvalue.toLowerCase()
    let replaceletter: string;
    // Loại bỏ ký tự đầu tiên nếu nó là phụ âm
    if (!this.isVowel(text.charAt(0))) {
      for (var i = 0; i < text.length; i++) {
        if (this.isVowel(text[i])) {
          let huy = text.indexOf(text[i])
          text = text.slice(huy, text.length)
          break;
        }
      }
    }
    // Xác định ví trí dấu cách, là nơi thêm dấu
    let space = text.indexOf(' ');
    let backtick = text.indexOf('.')
    let mark: string;
    if (space * backtick < 0) {
      space > backtick ? mark = ' ' : mark = '.'
    }
    let markPosition = text.indexOf(mark);
    text = text.replace(mark, '')
    let letterReplace = text[markPosition - 1];
    this.arrPhuAm.forEach(phuam => {
      this.isCorrectWord = true;
      var word = new Word();
      word.huyen = phuam + text.slice(0, markPosition - 1) + this.replaceLetter(letterReplace).huyen + text.substring(markPosition, text.length)
      word.sac = phuam + text.slice(0, markPosition - 1) + this.replaceLetter(letterReplace).sac + text.substring(markPosition, text.length)
      word.hoi = phuam + text.slice(0, markPosition - 1) + this.replaceLetter(letterReplace).hoi + text.substring(markPosition, text.length)
      word.nga = phuam + text.slice(0, markPosition - 1) + this.replaceLetter(letterReplace).nga + text.substring(markPosition, text.length)
      word.nang = phuam + text.slice(0, markPosition - 1) + this.replaceLetter(letterReplace).nang + text.substring(markPosition, text.length)
      word.ngang = phuam + text.slice(0, markPosition - 1) + this.replaceLetter(letterReplace).ngang + text.substring(markPosition, text.length)

      this.arrWords.push(word)
    })


  }
  ngOnInit() {

  }

  replaceLetter(letter) {
    let word = new Word()
    word.ngang = letter
    switch (letter) {
      case 'a':
        word.sac = 'á'; word.huyen = 'à'; word.hoi = 'ả'; word.nga = 'ã'; word.nang = 'ạ'; break;
      case 'ă':
        word.sac = 'ắ'; word.huyen = 'ằ'; word.hoi = 'ẳ'; word.nga = 'ẵ'; word.nang = 'ặ'; break;
      case 'â':
        word.sac = 'ấ'; word.huyen = 'ầ'; word.hoi = 'ẩ'; word.nga = 'ẫ'; word.nang = 'ậ'; break;
      case 'o':
        word.sac = 'ó'; word.huyen = 'ò'; word.hoi = 'ỏ'; word.nga = 'õ'; word.nang = 'ọ'; break;
      case 'ô':
        word.sac = 'ố'; word.huyen = 'ồ'; word.hoi = 'ổ'; word.nga = 'ỗ'; word.nang = 'ộ'; break;
      case 'ơ':
        word.sac = 'ớ'; word.huyen = 'ờ'; word.hoi = 'ở'; word.nga = 'ỡ'; word.nang = 'ợ'; break;
      case 'e':
        word.sac = 'é'; word.huyen = 'è'; word.hoi = 'ẻ'; word.nga = 'ẽ'; word.nang = 'ẹ'; break;
      case 'ê':
        word.sac = 'ế'; word.huyen = 'ề'; word.hoi = 'ể'; word.nga = 'ễ'; word.nang = 'ệ'; break;
      case 'u':
        word.sac = 'ú'; word.huyen = 'ù'; word.hoi = 'ủ'; word.nga = 'ũ'; word.nang = 'ụ'; break;
      case 'ư':
        word.sac = 'ứ'; word.huyen = 'ừ'; word.hoi = 'ử'; word.nga = 'ữ'; word.nang = 'ự'; break;
      case 'i':
        word.sac = 'í'; word.huyen = 'ì'; word.hoi = 'ỉ'; word.nga = 'ĩ'; word.nang = 'ị'; break;
      case 'y':
        word.sac = 'ý'; word.huyen = 'ỳ'; word.hoi = 'ỷ'; word.nga = 'ỹ'; word.nang = 'ỵ'; break;
      default:
        this.isCorrectWord = false;
    }
    return word
  }
  isVowel(letter) {
    let phuam = this.arrNguyenAm.indexOf(letter)
    if (phuam !== -1) {
      return true
    } else {
      return false
    }
  }
}
